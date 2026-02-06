import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';
import * as bcrypt from 'bcrypt';

export interface JwtPayload {
    sub: number;
    email: string;
}

export interface AuthResponse {
    user: {
        id: number;
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
    };
    accessToken: string;
}

@Injectable()
export class AuthService {
    private readonly SALT_ROUNDS = 10;

    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService,
    ) { }

    async register(registerDto: RegisterDto): Promise<AuthResponse> {
        const { email, password, fullName } = registerDto;

        // Check if user already exists
        const existingUser = await this.prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            throw new ConflictException('User with this email already exists');
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, this.SALT_ROUNDS);

        // Create user
        const user = await this.prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                fullName,
            },
        });

        // Generate JWT token
        const accessToken = this.generateToken(user.id, user.email!);

        return {
            user: {
                id: user.id,
                email: user.email!,
                fullName: user.fullName,
                avatarUrl: user.avatarUrl,
            },
            accessToken,
        };
    }

    async login(loginDto: LoginDto): Promise<AuthResponse> {
        const { email, password } = loginDto;

        // Find user by email
        const user = await this.prisma.user.findUnique({
            where: { email },
        });

        if (!user || !user.password) {
            throw new UnauthorizedException('Invalid email or password');
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid email or password');
        }

        // Generate JWT token
        const accessToken = this.generateToken(user.id, user.email!);

        return {
            user: {
                id: user.id,
                email: user.email!,
                fullName: user.fullName,
                avatarUrl: user.avatarUrl,
            },
            accessToken,
        };
    }

    async validateUser(userId: number) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                fullName: true,
                avatarUrl: true,
                createdAt: true,
            },
        });

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        return user;
    }

    private generateToken(userId: number, email: string): string {
        const payload: JwtPayload = {
            sub: userId,
            email,
        };

        return this.jwtService.sign(payload);
    }
}