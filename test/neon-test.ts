import { PrismaClient } from '@prisma/client';

const disabledDatabaseUrl = 'postgresql://disabled.invalid/neon_integration_tests';
const candidateUrl = process.env.NEON_TEST_DATABASE_URL;

function isDirectNeonUrl(value: string | undefined) {
  if (!value) {
    return false;
  }

  try {
    const endpoint = new URL(value);
    return endpoint.hostname.endsWith('.neon.tech') && !endpoint.hostname.includes('-pooler.');
  } catch {
    return false;
  }
}

export const neonTestDatabaseUrl = isDirectNeonUrl(candidateUrl)
  ? candidateUrl
  : undefined;

export function createNeonTestPrisma() {
  return new PrismaClient({
    datasources: { db: { url: neonTestDatabaseUrl ?? disabledDatabaseUrl } },
  });
}
