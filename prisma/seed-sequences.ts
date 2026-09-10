import { PrismaClient } from '@prisma/client';

const seedTables = ['providers', 'courses', 'exams', 'questions', 'answers'] as const;

function quoteIdentifier(identifier: string) {
  return `"${identifier.replaceAll('"', '""')}"`;
}

export async function alignSeedSequences(
  prisma: PrismaClient,
  schema: string,
  tables: readonly string[] = seedTables,
) {
  const qualifiedSchema = quoteIdentifier(schema);

  for (const table of tables) {
    const qualifiedTable = `${qualifiedSchema}.${quoteIdentifier(table)}`;

    await prisma.$transaction(async (tx) => {
      await tx.$executeRawUnsafe(`LOCK TABLE ${qualifiedTable} IN SHARE ROW EXCLUSIVE MODE`);

      const maximumId = await tx.$queryRawUnsafe<Array<{ maximum_id: number | null }>>(
        `SELECT MAX("id")::integer AS maximum_id FROM ${qualifiedTable}`,
      );
      const maxId = maximumId[0]?.maximum_id;

      if (maxId === null || maxId === undefined) {
        return;
      }

      await tx.$executeRaw`
        SELECT setval(
          pg_get_serial_sequence(${qualifiedTable}, 'id'),
          GREATEST(
            ${maxId},
            COALESCE((
              SELECT last_value::integer
              FROM pg_sequences
              WHERE (quote_ident(schemaname) || '.' || quote_ident(sequencename))::regclass =
                pg_get_serial_sequence(${qualifiedTable}, 'id')::regclass
            ), 0)
          ),
          true
        )
      `;
    });
  }
}
