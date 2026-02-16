import { Controller, Get, Patch, Body, Request, UseGuards } from "@nestjs/common";
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
        //id user được lấy từ token
    }

    @Patch()
    updateProfile(@Request() req: any, @Body() updateProfileDto: UpdateProfileDto) {
        return this.profileService.updateProfile(req.user.userId, updateProfileDto);
    }
}