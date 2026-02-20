import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { UploadService } from "../upload/upload.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class ProfileService {
    private readonly SALT_ROUNDS = 10;

    constructor(
        private readonly prisma: PrismaService,
        private readonly uploadService: UploadService,
    ) { }

    async getProfile(userId: number) {
        return this.prisma.user.findUnique({
            where: { id: userId },
        });
    }

    async updateProfile(userId: number, updateProfileDto: UpdateProfileDto) {
        // Check if user exists
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        // Build update data (exclude password fields)
        const { currentPassword, newPassword, ...profileData } = updateProfileDto;
        // lấy riêng currentPassword và newPassword, "profileData" là các trường còn lại
        const updateData: any = { ...profileData };

        // Handle password change
        if (currentPassword && newPassword) {
            if (!user.password) {
                throw new BadRequestException('Account does not have a password set');
            }

            const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
            if (!isPasswordValid) {
                throw new BadRequestException('Current password is incorrect');
            }

            updateData.password = await bcrypt.hash(newPassword, this.SALT_ROUNDS);
            //do updateData đang là ...spread => updateData.password nghĩa là thêm trường password vào updateData
            // => updateData sẽ có các trường: fullName, avatarUrl, password
            // => profileData không bị thay đổi
            // => nếu updateData = profileData (không dùng spread operator) thì khi thay đổi ở updateData thì profileData cũng thay đổi
        }

        // Update user profile
        const updatedUser = await this.prisma.user.update({
            where: { id: userId },
            data: updateData,
            select: {
                id: true,
                email: true,
                fullName: true,
                avatarUrl: true,
                createdAt: true,
            },
        });

        return updatedUser;
    }

    /**
     * Upload avatar image to R2 and update user profile
     */
    async uploadAvatar(userId: number, file: Express.Multer.File) {
        // Get current user to check for existing avatar
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        // Upload new avatar to R2
        const avatarUrl = await this.uploadService.uploadFile(file, 'avatars');

        // Delete old avatar from R2 if exists
        if (user.avatarUrl && user.avatarUrl.includes('hoangdinhlamhai.works')) {
            await this.uploadService.deleteFile(user.avatarUrl);
        }

        // Update user with new avatar URL
        const updatedUser = await this.prisma.user.update({
            where: { id: userId },
            data: { avatarUrl },
            select: {
                id: true,
                email: true,
                fullName: true,
                avatarUrl: true,
                createdAt: true,
            },
        });

        return updatedUser;
    }

    /**
     * Delete avatar image from R2 and clear avatarUrl
     */
    async deleteAvatar(userId: number) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        if (!user.avatarUrl) {
            throw new BadRequestException('No avatar to delete');
        }

        // Delete from R2
        if (user.avatarUrl.includes('hoangdinhlamhai.works')) {
            await this.uploadService.deleteFile(user.avatarUrl);
        }

        // Set avatarUrl to null
        const updatedUser = await this.prisma.user.update({
            where: { id: userId },
            data: { avatarUrl: null },
            select: {
                id: true,
                email: true,
                fullName: true,
                avatarUrl: true,
                createdAt: true,
            },
        });

        return updatedUser;
    }
}