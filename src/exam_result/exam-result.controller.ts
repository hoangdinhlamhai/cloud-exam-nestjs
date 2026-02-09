import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Query,
    UseGuards,
    Request,
    DefaultValuePipe,
} from "@nestjs/common";
import { ExamResultService } from "./exam-result.service.js";
import { SubmitExamDto } from "./dto/submit-exam.dto.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";

@Controller('api/exam-results')
@UseGuards(JwtAuthGuard) // All endpoints require authentication
export class ExamResultController {
    constructor(private readonly examResultService: ExamResultService) { }

    /**
     * Submit exam answers and get results
     * POST /api/exam-results
     */
    @Post()
    async submitExam(@Request() req: any, @Body() submitExamDto: SubmitExamDto) {
        const userId = req.user.userId;
        return this.examResultService.submitExam(userId, submitExamDto);
    }

    /**
     * Get exam history for current user
     * GET /api/exam-results/history?page=1&limit=10
     */
    @Get('history')
    async getHistory(
        @Request() req: any,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    ) {
        const userId = req.user.userId;
        return this.examResultService.getHistory(userId, page, limit);
    }

    /**
     * Get user statistics
     * GET /api/exam-results/stats
     */
    @Get('stats')
    async getUserStats(@Request() req: any) {
        const userId = req.user.userId;
        return this.examResultService.getUserStats(userId);
    }

    /**
     * Get specific exam result by ID
     * GET /api/exam-results/:id
     */
    @Get(':id')
    async getResultById(
        @Request() req: any,
        @Param('id', ParseIntPipe) id: number,
    ) {
        const userId = req.user.userId;
        return this.examResultService.getResultById(userId, id);
    }
}