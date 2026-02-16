import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class ProfileService {
    private readonly SALT_ROUNDS = 10;

    constructor(private readonly prisma: PrismaService) { }

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
}