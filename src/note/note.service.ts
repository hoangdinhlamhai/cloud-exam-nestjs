import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateNoteDto } from "./dto/create-note.dto";

@Injectable()
export class NoteService {
    constructor(private readonly prisma: PrismaService) { }

    async getAllNotes(userId: number) {
        return this.prisma.note.findMany({
            where: { userId },
            include: {
                question: {
                    select: {
                        id: true,
                        content: true,
                        exam: {
                            select: {
                                id: true,
                                title: true,
                                course: {
                                    select: {
                                        id: true,
                                        title: true,
                                    },
                                },
                            },
                        },
                    },
                },
                course: {
                    select: {
                        id: true,
                        title: true,
                    },
                },
            },
            orderBy: { updatedAt: 'desc' },
        });
    }
    async createNote(userId: number, createNoteDto: CreateNoteDto) {
        // Upsert: if note for same question already exists, update it
        if (createNoteDto.questionId) {
            const existing = await this.prisma.note.findFirst({
                where: {
                    userId,
                    questionId: createNoteDto.questionId,
                },
            });

            if (existing) {
                return this.prisma.note.update({
                    where: { id: existing.id },
                    data: { content: createNoteDto.content },
                });
            }
        }

        return this.prisma.note.create({
            data: {
                ...createNoteDto,
                userId,
            },
        });
    }

    async getNotesByCourse(userId: number, courseId: number) {
        return this.prisma.note.findMany({
            where: {
                userId,
                courseId,
            },
            orderBy: { createdAt: 'desc' },
        });
    }

    async getNotesByQuestion(userId: number, questionId: number) {
        return this.prisma.note.findFirst({
            where: {
                userId,
                questionId,
            },
        });
    }

    async deleteNote(userId: number, id: number) {
        const note = await this.prisma.note.findFirst({
            where: { id, userId },
        });

        if (!note) {
            throw new NotFoundException(`Note with ID ${id} not found`);
        }

        return this.prisma.note.delete({
            where: { id },
        });
    }
}