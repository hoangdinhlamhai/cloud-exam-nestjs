import { IsNotEmpty, IsString, IsOptional, IsNumber } from "class-validator";

export class CreateNoteDto {
    @IsOptional()
    @IsNumber()
    courseId?: number;

    @IsOptional()
    @IsNumber()
    questionId?: number;

    @IsString()
    @IsNotEmpty()
    content: string;
}