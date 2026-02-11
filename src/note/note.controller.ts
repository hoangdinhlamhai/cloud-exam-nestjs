import { Controller, Post, Body, Request, Get, Param, Delete, UseGuards, ParseIntPipe } from "@nestjs/common";
import { NoteService } from "./note.service";
import { CreateNoteDto } from "./dto/create-note.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Controller('api/notes')
@UseGuards(JwtAuthGuard)
export class NoteController {
    constructor(private readonly noteService: NoteService) { }

    @Get()
    async getAllNotes(@Request() req: any) {
        return this.noteService.getAllNotes(req.user.userId);
    }

    @Post()
    async createNote(@Request() req: any, @Body() createNoteDto: CreateNoteDto) {
        return this.noteService.createNote(req.user.userId, createNoteDto);
    }

    @Get('course/:courseId')
    async getNotesByCourse(@Request() req: any, @Param('courseId', ParseIntPipe) courseId: number) {
        return this.noteService.getNotesByCourse(req.user.userId, courseId);
    }

    @Get('question/:questionId')
    async getNotesByQuestion(@Request() req: any, @Param('questionId', ParseIntPipe) questionId: number) {
        return this.noteService.getNotesByQuestion(req.user.userId, questionId);
    }

    @Delete(':id')
    async deleteNote(@Request() req: any, @Param('id', ParseIntPipe) id: number) {
        return this.noteService.deleteNote(req.user.userId, id);
    }
}