import { SquareMenu } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { useQuestions } from "@/context/QuestionsProvider";
import QuestionMetrics from "@/components/QuestionMetrics";

const QuestionsNavigator = () => {
  const { questions, currentQuestion, setCurrentQuestion } = useQuestions();
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-start items-center gap-2">
        <SquareMenu />
        <span className="text-lg font-semibold">Questions Navigator</span>
      </div>
      <QuestionMetrics />
      <section className="grid grid-cols-5 gap-4 place-items-start">
        {questions.map((question, index) => {
          return (
            <div
              key={question.id}
              className={cn(
                "h-8 w-8 border border-gray-400 text-gray-500 rounded-xl flex justify-center items-center cursor-pointer",
                question.answered === true && "bg-gray-900 text-white",
                currentQuestion === question.id - 1 && "bg-zinc-700 text-white"
              )}
              onClick={() => {
                setCurrentQuestion(question.id - 1);
              }}
            >
              {index + 1}
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default QuestionsNavigator;
