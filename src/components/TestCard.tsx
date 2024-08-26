import Link from "next/link";
import React from "react";


interface TestCardProps {
  id: number;
  title: string;
  description: string;
  totalQuestions: number;
  time: number;
  price?: number;
}

const TestCard = ({
  id,
  title,
  description,
  totalQuestions,
  time,
  price,
}: TestCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 transition-all duration-300 hover:shadow-lg border border-slate-200">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm mb-4">{description}</p>
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-slate-400 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="font-medium text-slate-700">{time}</span>
          <span className="text-slate-500 ml-1">min</span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-slate-400 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <span className="text-slate-500">Questions:</span>
          <span className="font-medium text-slate-700 ml-1">
            {totalQuestions}
          </span>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-bold text-slate-700">${price}</span>
        <Link className="bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-colors duration-300 text-sm" href={"/me/tests/123"}>
          Start Test
        </Link>
      </div>
    </div>
  );
};

export default TestCard;
