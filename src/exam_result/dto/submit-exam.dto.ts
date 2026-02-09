import { IsInt, IsArray, ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

class AnswerDto {
    @IsInt()
    @IsNotEmpty()
    questionId!: number;

    @IsInt()
    @IsNotEmpty()
    answerId!: number;
}

export class SubmitExamDto {
    @IsInt()
    @IsNotEmpty()
    examId!: number;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnswerDto)
    answers!: AnswerDto[];
}