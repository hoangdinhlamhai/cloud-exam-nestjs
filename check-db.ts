import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const columns = await prisma.$queryRaw`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'users'
    `;
    console.log('Columns in users table:', JSON.stringify(columns, null, 2));
    
    const userCount = await prisma.user.count();
    console.log('Total users in DB:', userCount);

    const courseCount = await prisma.course.count();
    console.log('Total courses in DB:', courseCount);

    const providerCount = await prisma.provider.count();
    console.log('Total providers in DB:', providerCount);
  } catch (error) {
    console.error('Error checking DB:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
