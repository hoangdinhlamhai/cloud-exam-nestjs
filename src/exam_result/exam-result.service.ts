
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { SubmitExamDto } from './dto/submit-exam.dto.js';

export interface QuestionResult {
    questionId: number;
    isCorrect: boolean;
    userAnswerId: number;
    correctAnswerId: number;
    explanation: string | null;
}

export interface ExamSubmissionResponse {
    examResultId: number;
    score: number;
    totalQuestions: number;
    correctCount: number;
    details: QuestionResult[];
}

@Injectable()
export class ExamResultService {
    constructor(private readonly prisma: PrismaService) { }

    async submitExam(userId: number, submitExamDto: SubmitExamDto): Promise<ExamSubmissionResponse> {
        const { examId, answers } = submitExamDto;

        // 1. Get exam with all questions and correct answers
        const exam = await this.prisma.exam.findUnique({
            where: { id: examId },
            include: {
                questions: {
                    include: {
                        answers: {
                            where: { isCorrect: true },
                        },
                    },
                },
            },
        });

        if (!exam) {
            throw new NotFoundException(`Exam with ID ${examId} not found`);
        }

        let correctCount = 0;
        const details: QuestionResult[] = [];
        const totalQuestions = exam.questions.length;

        // 2. Process answers
        // Create a map for quick lookup of correct answers
        const correctAnswerMap = new Map<number, number>(); // questionId -> correctAnswerId
        const explanationMap = new Map<number, string | null>();

        exam.questions.forEach(q => {
            if (q.answers.length > 0) {
                correctAnswerMap.set(q.id, q.answers[0].id);
                explanationMap.set(q.id, q.explanation);
            }
        });

        // Loop through user answers
        for (const userAnswer of answers) {
            const correctAnswerId = correctAnswerMap.get(userAnswer.questionId);
            const isCorrect = correctAnswerId === userAnswer.answerId;

            if (isCorrect) {
                correctCount++;
            }

            details.push({
                questionId: userAnswer.questionId,
                isCorrect,
                userAnswerId: userAnswer.answerId,
                correctAnswerId: correctAnswerId || 0, // 0 if no correct answer found (should not happen in valid data)
                explanation: explanationMap.get(userAnswer.questionId) || null,
            });
        }

        // 3. Calculate score (percentage)
        const score = Math.round((correctCount / totalQuestions) * 100);

        // 4. Save result to database
        const examResult = await this.prisma.examResult.create({
            data: {
                userId,
                examId,
                score,
                correctCount,
                totalQuestions,
                completedAt: new Date(),
            },
        });

        // 5. Save user answers to database
        const userAnswerData = details.map(d => ({
            examResultId: examResult.id,
            questionId: d.questionId,
            answerId: d.userAnswerId,
            isCorrect: d.isCorrect,
        }));

        await this.prisma.userAnswer.createMany({
            data: userAnswerData,
        });

        // Return details for frontend to display
        return {
            examResultId: examResult.id,
            score,
            totalQuestions,
            correctCount,
            details,
        };
    }

    /**
     * Get exam history for a user
     */
    async getHistory(userId: number, page: number = 1, limit: number = 10) {
        const skip = (page - 1) * limit;

        const [results, total] = await Promise.all([
            this.prisma.examResult.findMany({
                where: { userId },
                skip,
                take: limit,
                orderBy: { completedAt: 'desc' },
                include: {
                    exam: {
                        select: {
                            id: true,
                            title: true,
                            course: {
                                select: {
                                    id: true,
                                    title: true,
                                    level: true,
                                },
                            },
                        },
                    },
                },
            }),
            this.prisma.examResult.count({ where: { userId } }),
        ]);

        return {
            data: results.map(r => ({
                id: r.id,
                score: r.score,
                correctCount: r.correctCount,
                totalQuestions: r.totalQuestions,
                completedAt: r.completedAt,
                passed: r.score >= 70, // Consider >= 70% as passed
                exam: r.exam,
            })),
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }

    /**
     * Get a specific exam result by ID
     */
    async getResultById(userId: number, resultId: number) {
        const result = await this.prisma.examResult.findUnique({
            where: { id: resultId },
            include: {
                exam: {
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        durationMinutes: true,
                        course: {
                            select: {
                                id: true,
                                title: true,
                                level: true,
                                provider: {
                                    select: {
                                        id: true,
                                        name: true,
                                    },
                                },
                            },
                        },
                    },
                },
                userAnswers: {
                    select: {
                        questionId: true,
                        answerId: true,
                        isCorrect: true,
                    },
                },
            },
        });

        if (!result) {
            throw new NotFoundException(`Exam result with ID ${resultId} not found`);
        }

        // Security check: ensure user can only view their own results
        if (result.userId !== userId) {
            throw new NotFoundException(`Exam result with ID ${resultId} not found`);
        }

        return {
            id: result.id,
            score: result.score,
            correctCount: result.correctCount,
            totalQuestions: result.totalQuestions,
            completedAt: result.completedAt,
            passed: result.score >= 70,
            exam: result.exam,
            userAnswers: result.userAnswers,
        };
    }

    /**
     * Get user statistics
     */
    async getUserStats(userId: number) {
        const results = await this.prisma.examResult.findMany({
            where: { userId },
            select: {
                score: true,
                correctCount: true,
                totalQuestions: true,
            },
        });

        if (results.length === 0) {
            return {
                totalExamsTaken: 0,
                averageScore: 0,
                totalCorrectAnswers: 0,
                totalQuestions: 0,
                passedExams: 0,
                failedExams: 0,
            };
        }

        const totalExamsTaken = results.length;
        const averageScore = Math.round(
            results.reduce((sum, r) => sum + r.score, 0) / totalExamsTaken
        );
        const totalCorrectAnswers = results.reduce((sum, r) => sum + r.correctCount, 0);
        const totalQuestions = results.reduce((sum, r) => sum + r.totalQuestions, 0);
        const passedExams = results.filter(r => r.score >= 70).length;
        const failedExams = totalExamsTaken - passedExams;

        return {
            totalExamsTaken,
            averageScore,
            totalCorrectAnswers,
            totalQuestions,
            passedExams,
            failedExams,
        };
    }
}
