import { PrismaClient, CourseLevel } from '@prisma/client';
import { alignSeedSequences } from './seed-sequences';
import { coursesData } from './seed-data/course/courses';
// Legacy exam imports (keeping for backward compat)
import { awsCloudPractitionerExam1 } from './seed-data/aws-cloud-practitioner-exam1';
import { awsCloudPractitionerExam2 } from './seed-data/aws-cloud-practitioner-exam2';
import { awsSolutionsArchitectExam1 } from './seed-data/aws-solutions-architect-exam1';
import { awsSolutionsArchitectExam2 } from './seed-data/aws-solutions-architect-exam2';
import { awsDeveloperExam1 } from './seed-data/aws-developer-exam1';
import { azureFundamentalsExam1 } from './seed-data/azure-fundamentals-exam1';
import { gcpCloudDigitalLeaderExam1 } from './seed-data/gcp-digital-leader-exam1';
// AWS Cloud Practitioner CLF-C02 (courseId: 1)
import { clfC02Exam1 } from './seed-data/aws/clf-c02-exam1';
import { clfC02Exam2 } from './seed-data/aws/clf-c02-exam2';
import { clfC02Exam3 } from './seed-data/aws/clf-c02-exam3';
import { clfC02Exam4 } from './seed-data/aws/clf-c02-exam4';
// AWS Solutions Architect Associate SAA-C03 (courseId: 2)
import { saaC03Exam1 } from './seed-data/aws/saa-c03-exam1';
import { saaC03Exam2 } from './seed-data/aws/saa-c03-exam2';
import { saaC03Exam3 } from './seed-data/aws/saa-c03-exam3';
import { saaC03Exam4 } from './seed-data/aws/saa-c03-exam4';
// AWS Developer Associate DVA-C02 (courseId: 3)
import { dvaC02Exam1 } from './seed-data/aws/dva-c02-exam1';
import { dvaC02Exam2 } from './seed-data/aws/dva-c02-exam2';
import { dvaC02Exam3 } from './seed-data/aws/dva-c02-exam3';
// AWS SysOps Administrator Associate SOA-C02 (courseId: 4)
import { soaC02Exam1 } from './seed-data/aws/soa-c02-exam1';
import { soaC02Exam2 } from './seed-data/aws/soa-c02-exam2';
import { soaC02Exam3 } from './seed-data/aws/soa-c02-exam3';
// AWS Solutions Architect Professional SAP-C02 (courseId: 5)
import { sapC02Exam1 } from './seed-data/aws/sap-c02-exam1';
import { sapC02Exam2 } from './seed-data/aws/sap-c02-exam2';
import { sapC02Exam3 } from './seed-data/aws/sap-c02-exam3';
// AWS DevOps Engineer Professional DOP-C02 (courseId: 6)
import { dopC02Exam1 } from './seed-data/aws/dop-c02-exam1';
import { dopC02Exam2 } from './seed-data/aws/dop-c02-exam2';
import { dopC02Exam3 } from './seed-data/aws/dop-c02-exam3';

// ─────────────────────────────────────────────────────────────────────────────
// Azure Exams
// ─────────────────────────────────────────────────────────────────────────────
// Azure Fundamentals AZ-900 (courseId: 7)
import { az900Exam1 } from './seed-data/azure/az-900-exam1';
import { az900Exam2 } from './seed-data/azure/az-900-exam2';
import { az900Exam3 } from './seed-data/azure/az-900-exam3';
import { az900Exam4 } from './seed-data/azure/az-900-exam4';

// Azure Administrator Associate AZ-104 (courseId: 8)
import { az104Exam1 } from './seed-data/azure/az-104-exam1';
import { az104Exam2 } from './seed-data/azure/az-104-exam2';
import { az104Exam3 } from './seed-data/azure/az-104-exam3';
import { az104Exam4 } from './seed-data/azure/az-104-exam4';

// Azure Developer Associate AZ-204 (courseId: 9)
import { az204Exam1 } from './seed-data/azure/az-204-exam1';
import { az204Exam2 } from './seed-data/azure/az-204-exam2';
import { az204Exam3 } from './seed-data/azure/az-204-exam3';
import { az204Exam4 } from './seed-data/azure/az-204-exam4';

// Azure Solutions Architect Expert AZ-305 (courseId: 10)
import { az305Exam1 } from './seed-data/azure/az-305-exam1';
import { az305Exam2 } from './seed-data/azure/az-305-exam2';
import { az305Exam3 } from './seed-data/azure/az-305-exam3';
import { az305Exam4 } from './seed-data/azure/az-305-exam4';

// Azure DevOps Engineer Expert AZ-400 (courseId: 11)
import { az400Exam1 } from './seed-data/azure/az-400-exam1';
import { az400Exam2 } from './seed-data/azure/az-400-exam2';
import { az400Exam3 } from './seed-data/azure/az-400-exam3';
import { az400Exam4 } from './seed-data/azure/az-400-exam4';

// ─────────────────────────────────────────────────────────────────────────────
// GCP Exams
// ─────────────────────────────────────────────────────────────────────────────
// GCP Cloud Digital Leader (courseId: 12)
import { cdlExam1 } from './seed-data/gcp/cdl-exam1';
import { cdlExam2 } from './seed-data/gcp/cdl-exam2';

// GCP Associate Cloud Engineer (courseId: 13)
import { aceExam1 } from './seed-data/gcp/ace-exam1';
import { aceExam2 } from './seed-data/gcp/ace-exam2';
import { aceExam3 } from './seed-data/gcp/ace-exam3';

// GCP Professional Cloud Architect (courseId: 14)
import { pcaExam1 } from './seed-data/gcp/pca-exam1';
import { pcaExam2 } from './seed-data/gcp/pca-exam2';
import { pcaExam3 } from './seed-data/gcp/pca-exam3';

// GCP Professional Data Engineer (courseId: 15)
import { pdeExam1 } from './seed-data/gcp/pde-exam1';
import { pdeExam2 } from './seed-data/gcp/pde-exam2';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting seed...');

    // ═══════════════════════════════════════════════════
    // 1. Create Providers
    // ═══════════════════════════════════════════════════
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

    // ═══════════════════════════════════════════════════
    // 2. Create Courses (from seed-data/course/courses.ts)
    // ═══════════════════════════════════════════════════
    const courses = await Promise.all(
        coursesData.map((course) =>
            prisma.course.upsert({
                where: { id: course.id },
                update: {
                    title: course.title,
                    description: course.description,
                    level: CourseLevel[course.level],
                    thumbnailUrl: course.thumbnailUrl,
                },
                create: {
                    id: course.id,
                    providerId: course.providerId,
                    title: course.title,
                    description: course.description,
                    level: CourseLevel[course.level],
                    thumbnailUrl: course.thumbnailUrl,
                },
            }),
        ),
    );

    console.log(`✅ Created ${courses.length} courses`);

    // ═══════════════════════════════════════════════════
    // 3. Create Exams, Questions & Answers
    // ═══════════════════════════════════════════════════
    const allExams = [
        // Legacy exams (IDs 1-7)
        awsCloudPractitionerExam1,
        awsCloudPractitionerExam2,
        awsSolutionsArchitectExam1,
        awsSolutionsArchitectExam2,
        awsDeveloperExam1,
        azureFundamentalsExam1,
        gcpCloudDigitalLeaderExam1,
        // AWS Cloud Practitioner CLF-C02 (IDs 8-11)
        clfC02Exam1,
        clfC02Exam2,
        clfC02Exam3,
        clfC02Exam4,
        // AWS Solutions Architect Associate SAA-C03 (IDs 12-15)
        saaC03Exam1,
        saaC03Exam2,
        saaC03Exam3,
        saaC03Exam4,
        // AWS Developer Associate DVA-C02 (IDs 16-18)
        dvaC02Exam1,
        dvaC02Exam2,
        dvaC02Exam3,
        // AWS SysOps Administrator Associate SOA-C02 (IDs 19-21)
        soaC02Exam1,
        soaC02Exam2,
        soaC02Exam3,
        // AWS Solutions Architect Professional SAP-C02 (IDs 22-24)
        sapC02Exam1,
        sapC02Exam2,
        sapC02Exam3,
        // AWS DevOps Engineer Professional DOP-C02 (IDs 25-27)
        dopC02Exam1,
        dopC02Exam2,
        dopC02Exam3,
        // Azure Fundamentals AZ-900
        az900Exam1,
        az900Exam2,
        az900Exam3,
        az900Exam4,
        // Azure Administrator Associate AZ-104
        az104Exam1,
        az104Exam2,
        az104Exam3,
        az104Exam4,
        // Azure Developer Associate AZ-204
        az204Exam1,
        az204Exam2,
        az204Exam3,
        az204Exam4,
        // Azure Solutions Architect Expert AZ-305
        az305Exam1,
        az305Exam2,
        az305Exam3,
        az305Exam4,
        // Azure DevOps Engineer Expert AZ-400
        az400Exam1,
        az400Exam2,
        az400Exam3,
        az400Exam4,
        // GCP Cloud Digital Leader (courseId: 12)
        cdlExam1,
        cdlExam2,
        // GCP Associate Cloud Engineer (courseId: 13)
        aceExam1,
        aceExam2,
        aceExam3,
        // GCP Professional Cloud Architect (courseId: 14)
        pcaExam1,
        pcaExam2,
        pcaExam3,
        // GCP Professional Data Engineer (courseId: 15)
        pdeExam1,
        pdeExam2,
    ];

    let totalQuestions = 0;

    for (let examIndex = 0; examIndex < allExams.length; examIndex++) {
        const examData = allExams[examIndex];
        const examId = examIndex + 1;

        // Create Exam
        const exam = await prisma.exam.upsert({
            where: { id: examId },
            update: {
                title: examData.title,
                description: examData.description,
                durationMinutes: examData.durationMinutes,
                totalQuestions: examData.questions.length,
            },
            create: {
                id: examId,
                courseId: examData.courseId,
                title: examData.title,
                description: examData.description,
                durationMinutes: examData.durationMinutes,
                totalQuestions: examData.questions.length,
            },
        });

        console.log(
            `📝 Created exam: ${exam.title} (${examData.questions.length} questions)`,
        );

        // Create Questions and Answers
        for (let qIndex = 0; qIndex < examData.questions.length; qIndex++) {
            const questionData = examData.questions[qIndex];
            // Generate unique IDs based on exam and question index
            // Using 1000 multiplier to safely handle up to 999 questions per exam
            const questionId = examIndex * 1000 + qIndex + 1;

            await prisma.question.upsert({
                where: { id: questionId },
                update: {
                    content: questionData.content,
                    explanation: questionData.explanation,
                },
                create: {
                    id: questionId,
                    examId: examId,
                    content: questionData.content,
                    explanation: questionData.explanation,
                },
            });

            // Create Answers
            for (
                let aIndex = 0;
                aIndex < questionData.answers.length;
                aIndex++
            ) {
                const answerData = questionData.answers[aIndex];
                const answerId = questionId * 10 + aIndex + 1;

                await prisma.answer.upsert({
                    where: { id: answerId },
                    update: {
                        content: answerData.content,
                        isCorrect: answerData.isCorrect,
                    },
                    create: {
                        id: answerId,
                        questionId: questionId,
                        content: answerData.content,
                        isCorrect: answerData.isCorrect,
                    },
                });
            }

            totalQuestions++;
        }
    }

    const [{ schema }] = await prisma.$queryRaw<Array<{ schema: string }>>`
        SELECT current_schema() AS schema
    `;
    await alignSeedSequences(prisma, schema);

    console.log(`\n🎉 Seed completed successfully!`);
    console.log(`📊 Summary:`);
    console.log(`   - ${providers.length} providers`);
    console.log(`   - ${courses.length} courses`);
    console.log(`   - ${allExams.length} exams`);
    console.log(`   - ${totalQuestions} questions total`);
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
