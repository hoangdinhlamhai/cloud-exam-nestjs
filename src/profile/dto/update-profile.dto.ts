import { IsOptional, IsString, MaxLength, MinLength, IsUrl, ValidateIf } from 'class-validator';

export class UpdateProfileDto {
    @IsOptional()
    @IsString()
    @MaxLength(100)
    fullName?: string;

    @IsOptional()
    @IsString()
    @IsUrl({}, { message: 'avatarUrl must be a valid URL' })
    avatarUrl?: string;

    @ValidateIf((o) => o.newPassword)
    @IsString()
    currentPassword?: string;

    @ValidateIf((o) => o.currentPassword)
    @IsString()
    @MinLength(6, { message: 'New password must be at least 6 characters' })
    newPassword?: string;
}
