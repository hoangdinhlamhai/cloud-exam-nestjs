import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

// PrismaService kế thừa từ PrismaClient và quản lý vòng đời kết nối (connect/disconnect) tới Database
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() { super(); }

    // Hàm này chạy ngay khi Module được khởi tạo (giống @PostConstruct)
    onModuleInit() {
        this.$connect();
    }

    // Hàm này chạy khi ứng dụng tắt (giống @PreDestroy)
    onModuleDestroy() {
        this.$disconnect();
    }
}
/**
 * Trong Spring Boot: Tạo UserRepository, ProductRepository riêng biệt. Mỗi file chỉ lo cho một Entity.

Trong NestJS + Prisma: PrismaService chứa tất cả các "Repository" bên trong nó.

this.prisma.user tương đương với UserRepository.

this.prisma.post tương đương với PostRepository.

this.prisma.order tương đương với OrderRepository.
 */