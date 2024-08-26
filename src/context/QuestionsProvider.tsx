"use client"
import { createContext, useContext, useState } from "react"
import { QuestionProps } from "@/constants/demo-questions"

interface QuestionsContextProps {
    questions: QuestionProps[]
    setQuestions: React.Dispatch<React.SetStateAction<QuestionProps[]>>
    currentQuestion: number
    setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>
}


const QuestionsContext = createContext<QuestionsContextProps | undefined>(undefined)

export const QuestionsProvider = ({children}: {children: React.ReactNode}) => {
    const [questions, setQuestions] = useState<QuestionProps[]>([])
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const value = {
        questions,
        setQuestions,
        currentQuestion,
        setCurrentQuestion
    }
    return (
        <QuestionsContext.Provider value={value}>
            {children}
        </QuestionsContext.Provider>
    )
}

export const useQuestions = () => {
    const context = useContext(QuestionsContext)
    if (!context) throw new Error("useQuestions must be used within QuestionsProvider")
    return context
}