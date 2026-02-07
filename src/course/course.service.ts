import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CourseLevel } from '@prisma/client';

export interface CourseWithProvider {
    id: number;
    title: string;
    description: string | null;
    level: CourseLevel;
    thumbnailUrl: string | null;
    isActive: boolean;
    createdAt: Date;
    provider: {
        id: number;
        name: string;
    };
    _count: {
        exams: number;
    };
}

export interface CourseListResponse {
    data: CourseWithProvider[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

@Injectable()
export class CourseService {
    constructor(private readonly prisma: PrismaService) { }

    async findAll(
        page: number = 1,
        limit: number = 10,
        level?: CourseLevel,
        providerId?: number,
        search?: string,
    ): Promise<CourseListResponse> {
        const skip = (page - 1) * limit;

        // Build where clause
        const where: {
            isActive: boolean;
            level?: CourseLevel;
            providerId?: number;
            title?: { contains: string; mode: 'insensitive' };
        } = {
            isActive: true,
        };

        if (level) {
            where.level = level;
        }

        if (providerId) {
            where.providerId = providerId;
        }

        if (search) {
            where.title = {
                contains: search,
                mode: 'insensitive',
            };
        }

        // Get courses with provider and exam count
        const [courses, total] = await Promise.all([
            this.prisma.course.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    provider: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                    _count: {
                        select: {
                            exams: true,
                        },
                    },
                },
            }),
            this.prisma.course.count({ where }),
        ]);

        return {
            data: courses,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }

    async findOne(id: number): Promise<CourseWithProvider> {
        const course = await this.prisma.course.findUnique({
            where: { id },
            include: {
                provider: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                _count: {
                    select: {
                        exams: true,
                    },
                },
            },
        });

        if (!course) {
            throw new NotFoundException(`Course with ID ${id} not found`);
        }

        return course;
    }

    async findByProvider(providerId: number): Promise<CourseWithProvider[]> {
        const courses = await this.prisma.course.findMany({
            where: {
                providerId,
                isActive: true,
            },
            orderBy: { createdAt: 'desc' },
            include: {
                provider: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                _count: {
                    select: {
                        exams: true,
                    },
                },
            },
        });

        return courses;
    }
}
