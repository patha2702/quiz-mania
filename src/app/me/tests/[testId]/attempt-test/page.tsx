"use client";
import QuestionsContainer from "@/components/QuestionsContainer";
import QuestionsNavigator from "@/components/QuestionsNavigator";
import Topbar from "@/components/Topbar";
import { QuestionsProvider } from "@/context/QuestionsProvider";
import React from "react";

const Examination = () => {
  return (
    <QuestionsProvider>
      <main className="h-screen w-screen max-h-screen grid grid-cols-[75%_25%]">
        <section className="border border-black p-6 h-screen overflow-y-auto">
          <Topbar />
          <QuestionsContainer />
        </section>
        <section className="border border-black p-6 max-w-xl">
          <QuestionsNavigator />
        </section>
      </main>
    </QuestionsProvider>
  );
};

export default Examination;
