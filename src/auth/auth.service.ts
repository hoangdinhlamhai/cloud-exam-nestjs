import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { GoogleLoginDto } from './dto/google-login.dto.js';
import * as bcrypt from 'bcrypt';
import { OAuth2Client } from 'google-auth-library';

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
    private readonly googleClient: OAuth2Client;

    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService,
    ) { 
        this.googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    }

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

    async googleLogin(googleLoginDto: GoogleLoginDto): Promise<AuthResponse> {
        try {
            const ticket = await this.googleClient.verifyIdToken({
                idToken: googleLoginDto.credential,
                audience: process.env.GOOGLE_CLIENT_ID,
            });

            const payload = ticket.getPayload();
            if (!payload) {
                throw new UnauthorizedException('Invalid Google token');
            }

            const { sub: googleId, email, name: fullName, picture: avatarUrl } = payload;

            // Find user by googleId
            let user = await this.prisma.user.findUnique({
                where: { googleId },
            });

            // If no user found by googleId, check if email exists to link, or create new
            if (!user) {
                if (email) {
                    user = await this.prisma.user.findUnique({
                        where: { email },
                    });
                }

                if (user) {
                    // Link existing email to Google account
                    user = await this.prisma.user.update({
                        where: { id: user.id },
                        data: { googleId, authProvider: 'google' },
                    });
                } else {
                    // Create new user
                    user = await this.prisma.user.create({
                        data: {
                            email: email || null,
                            fullName,
                            avatarUrl,
                            googleId,
                            authProvider: 'google',
                        },
                    });
                }
            }

            const accessToken = this.generateToken(user.id, user.email || '');

            return {
                user: {
                    id: user.id,
                    email: user.email || '',
                    fullName: user.fullName,
                    avatarUrl: user.avatarUrl,
                },
                accessToken,
            };
        } catch (error) {
            throw new UnauthorizedException('Invalid Google credentials');
        }
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