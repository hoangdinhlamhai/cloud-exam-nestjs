import { PrismaClient, CourseLevel } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting seed...');

    // Create Providers
    const providers = await Promise.all([
        prisma.provider.upsert({
            where: { id: 1 },
            update: {},
            create: {
                id: 1,
                name: 'Amazon Web Services (AWS)',
            },
        }),
        prisma.provider.upsert({
            where: { id: 2 },
            update: {},
            create: {
                id: 2,
                name: 'Microsoft Azure',
            },
        }),
        prisma.provider.upsert({
            where: { id: 3 },
            update: {},
            create: {
                id: 3,
                name: 'Google Cloud Platform (GCP)',
            },
        }),
    ]);

    console.log(`✅ Created ${providers.length} providers`);

    // Create Courses
    const courses = await Promise.all([
        // AWS Courses
        prisma.course.upsert({
            where: { id: 1 },
            update: {},
            create: {
                id: 1,
                providerId: 1,
                title: 'AWS Cloud Practitioner',
                description: 'Foundational cloud concepts and AWS services overview. Ideal for beginners starting their cloud journey.',
                level: CourseLevel.Practitioner,
                thumbnailUrl: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png',
            },
        }),
        prisma.course.upsert({
            where: { id: 2 },
            update: {},
            create: {
                id: 2,
                providerId: 1,
                title: 'AWS Solutions Architect Associate',
                description: 'Design distributed systems on AWS. Learn about compute, storage, database, and networking services.',
                level: CourseLevel.Associate,
                thumbnailUrl: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png',
            },
        }),
        prisma.course.upsert({
            where: { id: 3 },
            update: {},
            create: {
                id: 3,
                providerId: 1,
                title: 'AWS Developer Associate',
                description: 'Develop and maintain applications on AWS. Covers Lambda, API Gateway, DynamoDB, and more.',
                level: CourseLevel.Associate,
                thumbnailUrl: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Developer-Associate_badge.5c083fa855fe82c1cf2d0c8b883c265ec72a17c0.png',
            },
        }),
        prisma.course.upsert({
            where: { id: 4 },
            update: {},
            create: {
                id: 4,
                providerId: 1,
                title: 'AWS Solutions Architect Professional',
                description: 'Advanced architectural best practices for complex, multi-tier applications on AWS.',
                level: CourseLevel.Professional,
                thumbnailUrl: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Professional_badge.69d82ff1b2861e1089539ebba906c70b011b928a.png',
            },
        }),
        // Azure Courses
        prisma.course.upsert({
            where: { id: 5 },
            update: {},
            create: {
                id: 5,
                providerId: 2,
                title: 'Azure Fundamentals (AZ-900)',
                description: 'Introduction to cloud concepts and Azure services. Perfect for beginners.',
                level: CourseLevel.Practitioner,
                thumbnailUrl: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
            },
        }),
        prisma.course.upsert({
            where: { id: 6 },
            update: {},
            create: {
                id: 6,
                providerId: 2,
                title: 'Azure Administrator (AZ-104)',
                description: 'Manage Azure subscriptions, implement storage solutions, configure virtual networks.',
                level: CourseLevel.Associate,
                thumbnailUrl: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
            },
        }),
        // GCP Courses
        prisma.course.upsert({
            where: { id: 7 },
            update: {},
            create: {
                id: 7,
                providerId: 3,
                title: 'Google Cloud Digital Leader',
                description: 'Understand Google Cloud products and services and how they can be used to achieve business objectives.',
                level: CourseLevel.Practitioner,
                thumbnailUrl: 'https://cloud.google.com/static/images/certification/badges/cloud-digital-leader.svg',
            },
        }),
        prisma.course.upsert({
            where: { id: 8 },
            update: {},
            create: {
                id: 8,
                providerId: 3,
                title: 'Google Cloud Associate Cloud Engineer',
                description: 'Deploy applications, monitor operations, and manage enterprise solutions on GCP.',
                level: CourseLevel.Associate,
                thumbnailUrl: 'https://cloud.google.com/static/images/certification/badges/associate-cloud-engineer.svg',
            },
        }),
    ]);

    console.log(`✅ Created ${courses.length} courses`);

    console.log('🎉 Seed completed successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
