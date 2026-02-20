import {
    Controller,
    Get,
    Patch,
    Post,
    Delete,
    Body,
    Request,
    UseGuards,
    UseInterceptors,
    UploadedFile,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ProfileService } from "./profile.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { UpdateProfileDto } from "./dto/update-profile.dto";

@Controller('api/profile')
@UseGuards(JwtAuthGuard)
export class ProfileController {
    constructor(private readonly profileService: ProfileService) { }

    @Get()
    getProfile(@Request() req: any) {
        return this.profileService.getProfile(req.user.userId);
    }

    @Patch()
    updateProfile(@Request() req: any, @Body() updateProfileDto: UpdateProfileDto) {
        return this.profileService.updateProfile(req.user.userId, updateProfileDto);
    }

    /**
     * Upload avatar image
     * POST /api/profile/avatar
     */
    @Post('avatar')
    @UseInterceptors(FileInterceptor('file'))
    uploadAvatar(@Request() req: any, @UploadedFile() file: Express.Multer.File) {
        return this.profileService.uploadAvatar(req.user.userId, file);
    }

    /**
     * Delete avatar image
     * DELETE /api/profile/avatar
     */
    @Delete('avatar')
    deleteAvatar(@Request() req: any) {
        return this.profileService.deleteAvatar(req.user.userId);
    }
}