import { execFileSync } from 'node:child_process';
import { createNeonTestPrisma, neonTestDatabaseUrl } from './neon-test';

const prisma = createNeonTestPrisma();
const schema = `neon_init_test_${Date.now()}_${Math.random().toString(36).slice(2)}`;
const quotedSchema = `"${schema}"`;

function migrateIsolatedSchema() {
  const databaseUrl = new URL(neonTestDatabaseUrl!);
  databaseUrl.searchParams.set('schema', schema);

  execFileSync(process.execPath, [require.resolve('prisma/build/index.js'), 'migrate', 'deploy'], {
    cwd: process.cwd(),
    env: { ...process.env, DATABASE_URL: databaseUrl.toString() },
    stdio: 'pipe',
  });
}

const runNeonTest = neonTestDatabaseUrl ? describe : describe.skip;

runNeonTest('Neon initialization migration', () => {
  beforeAll(async () => {
    await prisma.$executeRawUnsafe(`CREATE SCHEMA ${quotedSchema}`);
  });

  afterAll(async () => {
    await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS ${quotedSchema} CASCADE`);
    await prisma.$disconnect();
  });

  it('creates the User authentication fields declared by the Prisma schema', () => {
    migrateIsolatedSchema();

    return prisma
      .$queryRaw<Array<{ column_name: string }>>`
        SELECT column_name
        FROM information_schema.columns
        WHERE table_schema = ${schema} AND table_name = 'users'
        ORDER BY column_name
      `
      .then(async (columns) => {
        const columnDetails = await prisma.$queryRaw<
          Array<{
            column_name: string;
            is_nullable: string;
            character_maximum_length: number | null;
          }>
        >`
          SELECT column_name, is_nullable, character_maximum_length
          FROM information_schema.columns
          WHERE table_schema = ${schema}
            AND table_name = 'users'
            AND column_name IN ('google_id', 'auth_provider')
          ORDER BY column_name
        `;
        const indexes = await prisma.$queryRaw<Array<{ indisunique: boolean }>>`
          SELECT i.indisunique
          FROM pg_index i
          JOIN pg_class c ON c.oid = i.indexrelid
          JOIN pg_namespace n ON n.oid = c.relnamespace
          WHERE n.nspname = ${schema} AND c.relname = 'users_google_id_key'
        `;

        await prisma.$executeRawUnsafe(
          `INSERT INTO ${quotedSchema}."users" ("google_id") VALUES ('test-google-user')`,
        );
        const insertedUser = await prisma.$queryRawUnsafe<Array<{ auth_provider: string }>>(
          `SELECT "auth_provider" FROM ${quotedSchema}."users" WHERE "google_id" = 'test-google-user'`,
        );

        expect(columns.map(({ column_name }) => column_name)).toEqual(
          expect.arrayContaining(['google_id', 'auth_provider']),
        );
        expect(columnDetails).toEqual([
          { column_name: 'auth_provider', is_nullable: 'NO', character_maximum_length: 20 },
          { column_name: 'google_id', is_nullable: 'YES', character_maximum_length: 255 },
        ]);
        expect(indexes).toEqual([{ indisunique: true }]);
        expect(insertedUser[0].auth_provider).toBe('local');
      });
  }, 30_000);
});
