import React, { useEffect, useState } from 'react'
import { useQuestions } from '@/context/QuestionsProvider'
const QuestionMetrics = () => {
    const {questions} = useQuestions()
    const [answeredQuestionsCount, setAnsweredQuestionsCount] = useState<number>(0)
    useEffect(()=> {
        let answeredQuestions = 0
        questions.forEach(question => {
            if (question.answered === true) {
                answeredQuestions += 1
            }
        })
        setAnsweredQuestionsCount(answeredQuestions)
    }, [questions])
  return (
    <div className="text-black flex justify-start items-center gap-4">
        <div className="flex justify-start items-center gap-2">
          <div className="h-8 w-8 bg-gray-900 rounded-xl"></div>
          <span className="text-sm font-medium">Answered</span>
          <span className="text-base font-bold">{answeredQuestionsCount}</span>
        </div>
        <div className="flex justify-start items-center gap-2">
          <div className="h-8 w-8 border border-gray-400 text-gray-500 rounded-xl"></div>
          <span className="text-sm font-medium">Unswered</span>
          <span className="text-base font-bold">{questions.length - answeredQuestionsCount}</span>
        </div>
      </div>
  )
}

export default QuestionMetrics