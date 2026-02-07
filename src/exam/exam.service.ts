import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

export interface ExamWithDetails {
    id: number;
    title: string;
    description: string | null;
    durationMinutes: number;
    totalQuestions: number;
    createdAt: Date;
    course: {
        id: number;
        title: string;
        level: string;
    };
    _count: {
        questions: number;
    };
}

export interface ExamWithQuestions {
    id: number;
    title: string;
    description: string | null;
    durationMinutes: number;
    totalQuestions: number;
    createdAt: Date;
    course: {
        id: number;
        title: string;
        level: string;
    };
    questions: {
        id: number;
        content: string;
        explanation: string | null;
        answers: {
            id: number;
            content: string;
            isCorrect: boolean;
        }[];
    }[];
}

export interface ExamListResponse {
    data: ExamWithDetails[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

@Injectable()
export class ExamService {
    constructor(private readonly prisma: PrismaService) { }

    /**
     * Get all exams with pagination
     */
    async findAll(
        page: number = 1,
        limit: number = 10,
        courseId?: number,
    ): Promise<ExamListResponse> {
        const skip = (page - 1) * limit;

        const where = courseId ? { courseId } : {};

        const [exams, total] = await Promise.all([
            this.prisma.exam.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    course: {
                        select: {
                            id: true,
                            title: true,
                            level: true,
                        },
                    },
                    _count: {
                        select: {
                            questions: true,
                        },
                    },
                },
            }),
            this.prisma.exam.count({ where }),
        ]);

        return {
            data: exams,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }

    /**
     * Get exams by course ID
     */
    async findByCourse(courseId: number): Promise<ExamWithDetails[]> {
        const exams = await this.prisma.exam.findMany({
            where: { courseId },
            orderBy: { createdAt: 'desc' },
            include: {
                course: {
                    select: {
                        id: true,
                        title: true,
                        level: true,
                    },
                },
                _count: {
                    select: {
                        questions: true,
                    },
                },
            },
        });

        return exams;
    }

    /**
     * Get exam details by ID (without questions - for preview)
     */
    async findOne(id: number): Promise<ExamWithDetails> {
        const exam = await this.prisma.exam.findUnique({
            where: { id },
            include: {
                course: {
                    select: {
                        id: true,
                        title: true,
                        level: true,
                    },
                },
                _count: {
                    select: {
                        questions: true,
                    },
                },
            },
        });

        if (!exam) {
            throw new NotFoundException(`Exam with ID ${id} not found`);
        }

        return exam;
    }

    /**
     * Get exam with all questions and answers (for taking the exam)
     * Note: In production, you might want to shuffle questions/answers
     * and not include isCorrect until submission
     */
    async findOneWithQuestions(id: number, includeCorrectAnswers: boolean = false): Promise<ExamWithQuestions> {
        const exam = await this.prisma.exam.findUnique({
            where: { id },
            include: {
                course: {
                    select: {
                        id: true,
                        title: true,
                        level: true,
                    },
                },
                questions: {
                    orderBy: { id: 'asc' },
                    include: {
                        answers: {
                            orderBy: { id: 'asc' },
                            select: {
                                id: true,
                                content: true,
                                isCorrect: includeCorrectAnswers,
                            },
                        },
                    },
                },
            },
        });

        if (!exam) {
            throw new NotFoundException(`Exam with ID ${id} not found`);
        }

        return exam as ExamWithQuestions;
    }

    /**
     * Get exam questions for taking the exam (without correct answers)
     */
    async startExam(id: number): Promise<ExamWithQuestions> {
        return this.findOneWithQuestions(id, false);
    }

    /**
     * Get exam questions with correct answers (for review after submission)
     */
    async reviewExam(id: number): Promise<ExamWithQuestions> {
        return this.findOneWithQuestions(id, true);
    }
}
