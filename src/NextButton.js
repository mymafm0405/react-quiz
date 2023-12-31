import React from "react";
import { useQuiz } from "./context/QuizContext";

export default function NextButton() {
  const {
    dispatch,
    answer,
    index,
    questions,
  } = useQuiz()
  const status = index < (questions.length - 1) ? "nextQuestion" : "finished";
  console.log(status)
  if (answer === null) return null;
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: status })}>
      {status === 'nextQuestion' ? 'Next' : 'Finish'}
    </button>
  );
}
