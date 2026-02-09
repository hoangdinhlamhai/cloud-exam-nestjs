import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateNoteDto } from "./dto/create-note.dto";

@Injectable()
export class NoteService {
    constructor(private readonly prisma: PrismaService) { }

    async createNote(userId: number, createNoteDto: CreateNoteDto) {
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
        });
    }

    async getNotesByQuestion(userId: number, questionId: number) {
        return this.prisma.note.findMany({
            where: {
                userId,
                questionId,
            },
        });
    }

    async deleteNote(userId: number, id: number) {
        return this.prisma.note.delete({
            where: {
                userId,
                id,
            },
        });
    }
}