import {
    Controller,
    Get,
    Post,
    Param,
    Body,
    Query,
    ParseIntPipe,
    ParseBoolPipe,
    DefaultValuePipe,
} from '@nestjs/common';
import { QuestionService } from './question.service.js';

@Controller('api/questions')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) { }

    /**
     * Get all questions by exam ID
     * GET /api/questions/exam/:examId?showAnswers=false
     */
    @Get('exam/:examId')
    async findByExam(
        @Param('examId', ParseIntPipe) examId: number,
        @Query('showAnswers', new DefaultValuePipe(false), ParseBoolPipe) showAnswers: boolean,
    ) {
        return this.questionService.findByExam(examId, showAnswers);
    }

    /**
     * Get a single question by ID
     * GET /api/questions/:id?showAnswers=false
     */
    @Get(':id')
    async findOne(
        @Param('id', ParseIntPipe) id: number,
        @Query('showAnswers', new DefaultValuePipe(false), ParseBoolPipe) showAnswers: boolean,
    ) {
        return this.questionService.findOne(id, showAnswers);
    }

    /**
     * Check answer for a question
     * POST /api/questions/:id/check
     * Body: { answerId: number }
     */
    @Post(':id/check')
    async checkAnswer(
        @Param('id', ParseIntPipe) id: number,
        @Body('answerId', ParseIntPipe) answerId: number,
    ) {
        return this.questionService.checkAnswer(id, answerId);
    }
}
