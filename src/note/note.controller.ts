import { Controller, Post, Body, Request, Get, Param, Delete } from "@nestjs/common";
import { NoteService } from "./note.service";
import { CreateNoteDto } from "./dto/create-note.dto";

@Controller('api/notes')
export class NoteController {
    constructor(private readonly noteService: NoteService) { }

    @Post()
    async createNote(@Request() req: any, @Body() createNoteDto: CreateNoteDto) {
        return this.noteService.createNote(req.user.userId, createNoteDto);
    }

    @Get(':courseId')
    async getNotesByCourse(@Request() req: any, @Param('courseId') courseId: number) {
        return this.noteService.getNotesByCourse(req.user.userId, courseId);
    }

    @Get(':questionId')
    async getNotesByQuestion(@Request() req: any, @Param('questionId') questionId: number) {
        return this.noteService.getNotesByQuestion(req.user.userId, questionId);
    }

    @Delete(':id')
    async deleteNote(@Request() req: any, @Param('id') id: number) {
        return this.noteService.deleteNote(req.user.userId, id);
    }
}