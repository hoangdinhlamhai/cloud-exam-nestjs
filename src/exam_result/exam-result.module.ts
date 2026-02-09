import { Module } from '@nestjs/common';
import { ExamResultController } from './exam-result.controller.js';
import { ExamResultService } from './exam-result.service.js';

@Module({
    controllers: [ExamResultController],
    providers: [ExamResultService],
    exports: [ExamResultService],
})
export class ExamResultModule { }
