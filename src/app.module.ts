import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './auth/auth.module.js';
import { CourseModule } from './course/course.module.js';
import { ExamModule } from './exam/exam.module.js';
import { QuestionModule } from './question/question.module.js';
import { AnswerModule } from './answer/answer.module.js';

import { ExamResultModule } from './exam_result/exam-result.module.js';
import { NoteModule } from './note/note.module.js';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    CourseModule,
    ExamModule,
    QuestionModule,
    AnswerModule,
    ExamResultModule,
    NoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

/*
khai báo các controller, service, của module đó để NestJS biết và khởi tạo
các module khác có thể sử dụng các service, controller này thông qua @Module
ví dụ: có AuthModule và UserModule.

Nếu ở UserModule, bạn muốn dùng lại hàm checkPassword() nằm trong AuthService, bạn không thể tự tiện @Inject(AuthService) vào được.

Bạn phải vào UserModule và Import cái AuthModule vào.
*/
