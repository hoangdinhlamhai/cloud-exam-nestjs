import {
    Controller,
    Get,
    Param,
    Query,
    ParseIntPipe,
    ParseBoolPipe,
    DefaultValuePipe,
} from '@nestjs/common';
import { AnswerService } from './answer.service.js';

@Controller('api/answers')
export class AnswerController {
    constructor(private readonly answerService: AnswerService) { }

    /**
     * Get all answers by question ID
     * GET /api/answers/question/:questionId?showCorrect=false
     */
    @Get('question/:questionId')
    async findByQuestion(
        @Param('questionId', ParseIntPipe) questionId: number,
        @Query('showCorrect', new DefaultValuePipe(false), ParseBoolPipe) showCorrect: boolean,
    ) {
        return this.answerService.findByQuestion(questionId, showCorrect);
    }

    /**
     * Get a single answer by ID
     * GET /api/answers/:id
     */
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.answerService.findOne(id);
    }

    /**
     * Get correct answer for a question
     * GET /api/answers/correct/:questionId
     */
    @Get('correct/:questionId')
    async getCorrectAnswer(@Param('questionId', ParseIntPipe) questionId: number) {
        return this.answerService.getCorrectAnswer(questionId);
    }
}
