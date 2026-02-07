import { Module } from '@nestjs/common';
import { AnswerController } from './answer.controller.js';
import { AnswerService } from './answer.service.js';

@Module({
    controllers: [AnswerController],
    providers: [AnswerService],
    exports: [AnswerService],
})
export class AnswerModule { }
