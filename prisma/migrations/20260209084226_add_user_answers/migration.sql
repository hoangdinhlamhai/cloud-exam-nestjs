-- CreateTable
CREATE TABLE "user_answers" (
    "id" SERIAL NOT NULL,
    "exam_result_id" INTEGER NOT NULL,
    "question_id" INTEGER NOT NULL,
    "answer_id" INTEGER NOT NULL,
    "is_correct" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_answers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_answers" ADD CONSTRAINT "user_answers_exam_result_id_fkey" FOREIGN KEY ("exam_result_id") REFERENCES "exam_results"("id") ON DELETE CASCADE ON UPDATE CASCADE;
