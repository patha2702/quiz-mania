import TestCard from "@/components/TestCard";
import React from "react";

interface TestCardProps {
  id: number;
  title: string;
  description: string;
  totalQuestions: number;
  time: number;
  price?: number;
}

const tests: TestCardProps[] = [
  {
    id: 1,
    title: "Aptitude test",
    description:
      "Aptitude test ranging from qualitative to blood relation questions. Questions curated by expert individuals.",
    totalQuestions: 30,
    time: 120,
    price: 1000,
  },
  {
    id: 2,
    title: "Aptitude test",
    description:
      "Aptitude test ranging from qualitative to blood relation questions. Questions curated by expert individuals.",
    totalQuestions: 30,
    time: 120,
    price: 1000,
  },
];

const Tests = () => {
  return (
    <section className="p-4">
      <section className="mt-2">
        <h1 className="text-3xl font-semibold text-black">Tests</h1>
        <section className="p-2 grid grid-cols-1 md:grid-cols-2 gap-2">
          {tests.map((test) => {
            return <TestCard {...test} key={test.id} />;
          })}
        </section>
      </section>
    </section>
  );
};

export default Tests;
