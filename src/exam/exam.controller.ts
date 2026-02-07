import {
    Controller,
    Get,
    Param,
    Query,
    ParseIntPipe,
    DefaultValuePipe,
} from '@nestjs/common';
import { ExamService } from './exam.service.js';

@Controller('api/exams')
export class ExamController {
    constructor(private readonly examService: ExamService) { }

    /**
     * Get all exams with pagination
     * GET /api/exams?page=1&limit=10&courseId=1
     */
    @Get()
    async findAll(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('courseId') courseId?: string,
    ) {
        return this.examService.findAll(
            page,
            limit,
            courseId ? parseInt(courseId, 10) : undefined,
        );
    }

    /**
     * Get exams by course ID
     * GET /api/exams/course/:courseId
     */
    @Get('course/:courseId')
    async findByCourse(@Param('courseId', ParseIntPipe) courseId: number) {
        return this.examService.findByCourse(courseId);
    }

    /**
     * Get exam details (preview - without questions)
     * GET /api/exams/:id
     */
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.examService.findOne(id);
    }

    /**
     * Start exam - get questions without correct answers
     * GET /api/exams/:id/start
     */
    @Get(':id/start')
    async startExam(@Param('id', ParseIntPipe) id: number) {
        return this.examService.startExam(id);
    }

    /**
     * Review exam - get questions with correct answers
     * GET /api/exams/:id/review
     */
    @Get(':id/review')
    async reviewExam(@Param('id', ParseIntPipe) id: number) {
        return this.examService.reviewExam(id);
    }
}
