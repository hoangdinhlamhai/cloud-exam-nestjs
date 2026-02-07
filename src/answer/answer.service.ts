import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

export interface AnswerResponse {
    id: number;
    questionId: number;
    content: string;
    isCorrect: boolean;
}

@Injectable()
export class AnswerService {
    constructor(private readonly prisma: PrismaService) { }

    /**
     * Get all answers by question ID
     */
    async findByQuestion(questionId: number, includeCorrect: boolean = false): Promise<AnswerResponse[]> {
        const answers = await this.prisma.answer.findMany({
            where: { questionId },
            orderBy: { id: 'asc' },
            select: {
                id: true,
                questionId: true,
                content: true,
                isCorrect: includeCorrect,
            },
        });

        return answers as AnswerResponse[];
    }

    /**
     * Get a single answer by ID
     */
    async findOne(id: number): Promise<AnswerResponse> {
        const answer = await this.prisma.answer.findUnique({
            where: { id },
        });

        if (!answer) {
            throw new NotFoundException(`Answer with ID ${id} not found`);
        }

        return answer;
    }

    /**
     * Get correct answer for a question
     */
    async getCorrectAnswer(questionId: number): Promise<AnswerResponse | null> {
        const answer = await this.prisma.answer.findFirst({
            where: {
                questionId,
                isCorrect: true,
            },
        });

        return answer;
    }
}
