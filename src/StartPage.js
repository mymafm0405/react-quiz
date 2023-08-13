import React from 'react'

export default function StartPage({numOfQuestions, dispatch}) {
  return (
    <div className='start'>
        <h2>Welcome to the Quiz App</h2>
        <h3>{numOfQuestions} Questions are ready for you</h3>
        <button onClick={() => dispatch({type: 'startQuiz'})} className='btn btn-ui'>Start Quiz</button>
    </div>
  )
}
