import { createNeonTestPrisma, neonTestDatabaseUrl } from './neon-test';
import { alignSeedSequences } from '../prisma/seed-sequences';

const prisma = createNeonTestPrisma();
const writer = createNeonTestPrisma();
const schema = `neon_sequence_test_${Date.now()}_${Math.random().toString(36).slice(2)}`;
const quotedSchema = `"${schema}"`;
const quotedSchemaName = `neon sequence schema ${Date.now()}`;
const quotedTableName = 'seed items';
const quoteIdentifier = (identifier: string) => `"${identifier.replaceAll('"', '""')}"`;
const quotedSpecialSchema = quoteIdentifier(quotedSchemaName);
const quotedSpecialTable = quoteIdentifier(quotedTableName);
const seedTables = ['providers', 'courses', 'exams', 'questions', 'answers'];
const testTables = [...seedTables, 'race_items'];
const runNeonTest = neonTestDatabaseUrl ? describe : describe.skip;

runNeonTest('seed sequence alignment', () => {
  beforeAll(async () => {
    await prisma.$executeRawUnsafe(`CREATE SCHEMA ${quotedSchema}`);

    for (const table of testTables) {
      await prisma.$executeRawUnsafe(
        `CREATE TABLE ${quotedSchema}."${table}" ("id" SERIAL PRIMARY KEY)`,
      );
    }
  });

  afterAll(async () => {
    await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS ${quotedSchema} CASCADE`);
    await Promise.all([prisma.$disconnect(), writer.$disconnect()]);
  });

  it('prevents the next generated ID from colliding with an explicit seeded ID', async () => {
    await prisma.$executeRawUnsafe(`INSERT INTO ${quotedSchema}."providers" ("id") VALUES (1)`);

    await expect(
      prisma.$executeRawUnsafe(`INSERT INTO ${quotedSchema}."providers" DEFAULT VALUES`),
    ).rejects.toMatchObject({ code: 'P2010' });

    await alignSeedSequences(prisma, schema, ['providers']);
    const generated = await prisma.$queryRawUnsafe<Array<{ id: number }>>(
      `INSERT INTO ${quotedSchema}."providers" DEFAULT VALUES RETURNING "id"`,
    );

    expect(generated[0].id).toBe(2);
  });

  it('does not rewind a higher sequence value', async () => {
    await prisma.$executeRawUnsafe(`INSERT INTO ${quotedSchema}."courses" ("id") VALUES (7)`);
    await prisma.$executeRawUnsafe(
      `SELECT setval(pg_get_serial_sequence('${schema}.courses', 'id'), 100, true)`,
    );

    await alignSeedSequences(prisma, schema, ['courses']);
    const generated = await prisma.$queryRawUnsafe<Array<{ id: number }>>(
      `INSERT INTO ${quotedSchema}."courses" DEFAULT VALUES RETURNING "id"`,
    );

    expect(generated[0].id).toBe(101);
  });

  it('waits for an in-flight explicit-ID insert before aligning its sequence', async () => {
    let releaseWriter!: () => void;
    let writerIsReady!: () => void;
    const releaseWriterPromise = new Promise<void>((resolve) => {
      releaseWriter = resolve;
    });
    const writerReadyPromise = new Promise<void>((resolve) => {
      writerIsReady = resolve;
    });

    const inFlightInsert = writer.$transaction(async (tx) => {
      await tx.$executeRawUnsafe(`INSERT INTO ${quotedSchema}."race_items" ("id") VALUES (1)`);
      writerIsReady();
      await releaseWriterPromise;
    }, { timeout: 10_000 });
    await writerReadyPromise;

    const alignment = alignSeedSequences(prisma, schema, ['race_items']);

    try {
      const deadline = Date.now() + 5_000;
      let pendingLock = false;
      while (Date.now() < deadline && !pendingLock) {
        const locks = await prisma.$queryRaw<Array<{ count: bigint }>>`
          SELECT COUNT(*)::bigint AS count
          FROM pg_locks
          WHERE relation = to_regclass(${`${schema}.race_items`})
            AND mode = 'ShareRowExclusiveLock'
            AND NOT granted
        `;
        pendingLock = locks[0].count > 0n;

        if (!pendingLock) {
          await new Promise((resolve) => setTimeout(resolve, 25));
        }
      }

      expect(pendingLock).toBe(true);
    } finally {
      releaseWriter();
    }

    await Promise.all([inFlightInsert, alignment]);
    const generated = await prisma.$queryRawUnsafe<Array<{ id: number }>>(
      `INSERT INTO ${quotedSchema}."race_items" DEFAULT VALUES RETURNING "id"`,
    );

    expect(generated[0].id).toBe(2);
  }, 10_000);

  it('aligns a table in a quoted schema', async () => {
    await prisma.$executeRawUnsafe(`CREATE SCHEMA ${quotedSpecialSchema}`);

    try {
      await prisma.$executeRawUnsafe(
        `CREATE TABLE ${quotedSpecialSchema}.${quotedSpecialTable} ("id" SERIAL PRIMARY KEY)`,
      );
      await prisma.$executeRawUnsafe(
        `INSERT INTO ${quotedSpecialSchema}.${quotedSpecialTable} ("id") VALUES (4)`,
      );

      await alignSeedSequences(prisma, quotedSchemaName, [quotedTableName]);
      const generated = await prisma.$queryRawUnsafe<Array<{ id: number }>>(
        `INSERT INTO ${quotedSpecialSchema}.${quotedSpecialTable} DEFAULT VALUES RETURNING "id"`,
      );

      expect(generated[0].id).toBe(5);
    } finally {
      await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS ${quotedSpecialSchema} CASCADE`);
    }
  });

  it('aligns all five seed tables and leaves empty sequences safe', async () => {
    await prisma.$executeRawUnsafe(`INSERT INTO ${quotedSchema}."exams" ("id") VALUES (42)`);
    await prisma.$executeRawUnsafe(
      `SELECT setval(pg_get_serial_sequence('${schema}.answers', 'id'), 50, true)`,
    );

    await expect(alignSeedSequences(prisma, schema)).resolves.toBeUndefined();

    const [exam, question, answer] = await Promise.all([
      prisma.$queryRawUnsafe<Array<{ id: number }>>(
        `INSERT INTO ${quotedSchema}."exams" DEFAULT VALUES RETURNING "id"`,
      ),
      prisma.$queryRawUnsafe<Array<{ id: number }>>(
        `INSERT INTO ${quotedSchema}."questions" DEFAULT VALUES RETURNING "id"`,
      ),
      prisma.$queryRawUnsafe<Array<{ id: number }>>(
        `INSERT INTO ${quotedSchema}."answers" DEFAULT VALUES RETURNING "id"`,
      ),
    ]);

    expect(exam[0].id).toBe(43);
    expect(question[0].id).toBe(1);
    expect(answer[0].id).toBe(51);
  });
});
