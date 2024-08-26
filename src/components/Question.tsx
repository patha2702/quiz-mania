import { QuestionProps } from "@/constants/demo-questions";
import React from "react";

interface QuestionComponentProps extends QuestionProps {
  selectedOption: number | null;
  onOptionChange: (questionId: number, optionId: number) => void;
}

const Question = ({
  id,
  question,
  options,
  selectedOption,
  onOptionChange,
}: QuestionComponentProps) => {
  return (
    <section
      id={`${id}`}
      className="w-full py-2 flex flex-col gap-4 items-start"
    >
      <h1 className="text-xl font-semibold">{`Question ${id}`}</h1>
      <p className="text-lg">{question}</p>
      <div>
        <ul className="flex flex-col items-start">
          {options &&
            options.map((option) => {
              const inputId = `${id}-${option.id}`;
              return (
                <li
                  className="p-2 flex justify-start items-center gap-2"
                  key={option.id}
                >
                  <input
                    id={inputId}
                    type="radio"
                    name={`${id}`}
                    value={option.id}
                    checked={selectedOption === option.id}
                    onChange={() => onOptionChange(id, option.id)}
                    className="h-5 w-5 bg-gray-700"
                  />
                  <label htmlFor={inputId} className="text-lg cursor-pointer">
                    {option.option}
                  </label>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default Question;
