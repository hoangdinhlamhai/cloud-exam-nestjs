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

    // Create Exams with Questions and Answers
    // AWS Cloud Practitioner Practice Exam 1
    const exam1 = await prisma.exam.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            courseId: 1,
            title: 'AWS Cloud Practitioner - Practice Exam 1',
            description: 'Test your foundational AWS knowledge with 10 practice questions covering cloud concepts, security, and core services.',
            durationMinutes: 20,
            totalQuestions: 5,
        },
    });

    // Questions for Exam 1
    const questionsData = [
        {
            id: 1,
            examId: 1,
            content: 'What is the primary benefit of using AWS Cloud compared to on-premises infrastructure?',
            explanation: 'AWS Cloud offers pay-as-you-go pricing, eliminating upfront capital expenses and allowing businesses to pay only for what they use.',
            answers: [
                { id: 1, content: 'Higher upfront costs', isCorrect: false },
                { id: 2, content: 'Pay-as-you-go pricing model', isCorrect: true },
                { id: 3, content: 'Limited scalability', isCorrect: false },
                { id: 4, content: 'Longer deployment times', isCorrect: false },
            ],
        },
        {
            id: 2,
            examId: 1,
            content: 'Which AWS service is used for object storage?',
            explanation: 'Amazon S3 (Simple Storage Service) is the primary object storage service in AWS, designed for storing and retrieving any amount of data.',
            answers: [
                { id: 5, content: 'Amazon EC2', isCorrect: false },
                { id: 6, content: 'Amazon S3', isCorrect: true },
                { id: 7, content: 'Amazon RDS', isCorrect: false },
                { id: 8, content: 'Amazon VPC', isCorrect: false },
            ],
        },
        {
            id: 3,
            examId: 1,
            content: 'What does the AWS Shared Responsibility Model define?',
            explanation: 'The Shared Responsibility Model clarifies that AWS is responsible for security OF the cloud (infrastructure), while customers are responsible for security IN the cloud (data, applications).',
            answers: [
                { id: 9, content: 'AWS pricing structure', isCorrect: false },
                { id: 10, content: 'Division of security responsibilities between AWS and customers', isCorrect: true },
                { id: 11, content: 'How to share AWS resources between accounts', isCorrect: false },
                { id: 12, content: 'Network bandwidth allocation', isCorrect: false },
            ],
        },
        {
            id: 4,
            examId: 1,
            content: 'Which AWS service provides a managed relational database?',
            explanation: 'Amazon RDS (Relational Database Service) is a managed service that makes it easy to set up, operate, and scale relational databases in the cloud.',
            answers: [
                { id: 13, content: 'Amazon DynamoDB', isCorrect: false },
                { id: 14, content: 'Amazon RDS', isCorrect: true },
                { id: 15, content: 'Amazon S3', isCorrect: false },
                { id: 16, content: 'Amazon ElastiCache', isCorrect: false },
            ],
        },
        {
            id: 5,
            examId: 1,
            content: 'What is an AWS Region?',
            explanation: 'An AWS Region is a physical location around the world where AWS clusters data centers. Each Region consists of multiple, isolated, and physically separate Availability Zones.',
            answers: [
                { id: 17, content: 'A single data center', isCorrect: false },
                { id: 18, content: 'A geographical area with multiple Availability Zones', isCorrect: true },
                { id: 19, content: 'A virtual private network', isCorrect: false },
                { id: 20, content: 'An AWS account boundary', isCorrect: false },
            ],
        },
    ];

    for (const q of questionsData) {
        await prisma.question.upsert({
            where: { id: q.id },
            update: {},
            create: {
                id: q.id,
                examId: q.examId,
                content: q.content,
                explanation: q.explanation,
            },
        });

        for (const a of q.answers) {
            await prisma.answer.upsert({
                where: { id: a.id },
                update: {},
                create: {
                    id: a.id,
                    questionId: q.id,
                    content: a.content,
                    isCorrect: a.isCorrect,
                },
            });
        }
    }

    console.log(`✅ Created 1 exam with ${questionsData.length} questions`);

    // AWS Cloud Practitioner Practice Exam 2
    const exam2 = await prisma.exam.upsert({
        where: { id: 2 },
        update: {},
        create: {
            id: 2,
            courseId: 1,
            title: 'AWS Cloud Practitioner - Practice Exam 2',
            description: 'Advanced practice questions covering AWS services, billing, and architecture best practices.',
            durationMinutes: 30,
            totalQuestions: 5,
        },
    });

    console.log(`✅ Created exam: ${exam2.title}`);

    // AWS Solutions Architect Exam
    const exam3 = await prisma.exam.upsert({
        where: { id: 3 },
        update: {},
        create: {
            id: 3,
            courseId: 2,
            title: 'AWS Solutions Architect - Practice Exam 1',
            description: 'Test your skills in designing distributed systems and architectures on AWS.',
            durationMinutes: 45,
            totalQuestions: 10,
        },
    });

    console.log(`✅ Created exam: ${exam3.title}`);

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
