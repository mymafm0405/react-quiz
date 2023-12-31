import React from 'react'
import { useQuiz } from './context/QuizContext'

export default function StartPage() {
  const {questions, dispatch} = useQuiz()
  return (
    <div className='start'>
        <h2>Welcome to the Quiz App</h2>
        <h3>{questions.length} Questions are ready for you</h3>
        <button onClick={() => dispatch({type: 'startQuiz'})} className='btn btn-ui'>Start Quiz</button>
    </div>
  )
}
