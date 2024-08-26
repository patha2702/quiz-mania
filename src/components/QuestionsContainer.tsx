"use client";
import React, { useEffect, useState } from "react";
import { aptitudeQuestions } from "@/constants/demo-questions";
import { QuestionProps } from "@/constants/demo-questions";
import Question from "./Question";
import { useQuestions } from "@/context/QuestionsProvider";

const QuestionsContainer = () => {
  const { questions, setQuestions, currentQuestion, setCurrentQuestion } =
    useQuestions();
  const [selectedOption, setSelectedOption] = useState<
    Record<number, number | null>
  >({});
  useEffect(() => {
    setQuestions(aptitudeQuestions);
  }, []);

  const handleNavigation = (e: any) => {
    if (e.target.id === "previous" && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
    if (e.target.id === "next" && currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleOptionChange = (questionId: number, optionId: number) => {
    setSelectedOption((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
    setQuestions((prev) => {
      return prev.map((question) => {
        return question.id === questionId
          ? { ...question, selectedOption: optionId, answered: true }
          : question;
      });
    });
  };

  return (
    <section className="w-full mt-16 flex flex-col items-start">
      {questions[currentQuestion] && (
        <Question
          id={questions[currentQuestion]?.id}
          question={questions[currentQuestion]?.question}
          options={questions[currentQuestion]?.options}
          answered={questions[currentQuestion]?.answered}
          selectedOption={selectedOption[questions[currentQuestion].id] || null}
          onOptionChange={handleOptionChange}
        />
      )}

      <div className="mt-4 w-full flex justify-center items-center gap-6">
        <button
          className="px-4 py-2 rounded-md bg-gray-700 text-white disabled:cursor-not-allowed disabled:bg-gray-500"
          id="previous"
          onClick={handleNavigation}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>

        <button
          className="px-4 py-2 rounded-md bg-gray-700 text-white disabled:cursor-not-allowed disabled:bg-gray-500"
          id="next"
          onClick={handleNavigation}
          disabled={currentQuestion === questions.length - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default QuestionsContainer;
