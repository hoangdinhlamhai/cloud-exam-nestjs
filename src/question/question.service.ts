import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

export interface QuestionWithAnswers {
    id: number;
    examId: number;
    content: string;
    explanation: string | null;
    createdAt: Date;
    answers: {
        id: number;
        content: string;
        isCorrect: boolean;
    }[];
}

@Injectable()
export class QuestionService {
    constructor(private readonly prisma: PrismaService) { }

    /**
     * Get all questions by exam ID
     */
    async findByExam(examId: number, includeCorrectAnswers: boolean = false): Promise<QuestionWithAnswers[]> {
        const questions = await this.prisma.question.findMany({
            where: { examId },
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
        });

        return questions as QuestionWithAnswers[];
    }

    /**
     * Get a single question by ID
     */
    async findOne(id: number, includeCorrectAnswers: boolean = false): Promise<QuestionWithAnswers> {
        const question = await this.prisma.question.findUnique({
            where: { id },
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
        });

        if (!question) {
            throw new NotFoundException(`Question with ID ${id} not found`);
        }

        return question as QuestionWithAnswers;
    }

    /**
     * Check answer for a question
     */
    async checkAnswer(questionId: number, answerId: number): Promise<{
        isCorrect: boolean;
        correctAnswerId: number;
        explanation: string | null;
    }> {
        const question = await this.prisma.question.findUnique({
            where: { id: questionId },
            include: {
                answers: {
                    where: { isCorrect: true },
                    select: { id: true },
                },
            },
        });

        if (!question) {
            throw new NotFoundException(`Question with ID ${questionId} not found`);
        }

        const correctAnswerId = question.answers[0]?.id;
        const isCorrect = answerId === correctAnswerId;

        return {
            isCorrect,
            correctAnswerId,
            explanation: question.explanation,
        };
    }
}
