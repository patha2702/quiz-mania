import TestCard from "@/components/TestCard";
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

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

const Dashboard = async () => {
  const session = await auth()
  if (!session?.user) redirect("/")
  return (
    <section className="p-4">
      <h1 className="text-3xl font-semibold text-black">Dashboard</h1>
      <section className="mt-2">
        <h2 className="text-2xl font-semibold text-black my-2">My Tests</h2>
        <section className="p-2 grid grid-cols-1 md:grid-cols-2 gap-2">
          {tests.map((test) => {
            return <TestCard {...test} key={test.id} />;
          })}
        </section>
      </section>
    </section>
  );
};

export default Dashboard;
