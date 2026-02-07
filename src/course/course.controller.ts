import {
    Controller,
    Get,
    Param,
    Query,
    ParseIntPipe,
    DefaultValuePipe,
} from '@nestjs/common';
import { CourseService } from './course.service.js';
import { CourseLevel } from '@prisma/client';

@Controller('api/courses')
export class CourseController {
    constructor(private readonly courseService: CourseService) { }

    /**
     * Get all courses with pagination and filtering
     * GET /api/courses?page=1&limit=10&level=Associate&providerId=1&search=aws
     */
    @Get()
    async findAll(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('level') level?: CourseLevel,
        @Query('providerId') providerId?: string,
        @Query('search') search?: string,
    ) {
        return this.courseService.findAll(
            page,
            limit,
            level,
            providerId ? parseInt(providerId, 10) : undefined,
            search,
        );
    }

    /**
     * Get a single course by ID
     * GET /api/courses/:id
     */
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.courseService.findOne(id);
    }

    /**
     * Get courses by provider
     * GET /api/courses/provider/:providerId
     */
    @Get('provider/:providerId')
    async findByProvider(@Param('providerId', ParseIntPipe) providerId: number) {
        return this.courseService.findByProvider(providerId);
    }
}
