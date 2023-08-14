import React from "react";
import Option from "./Option";
import { useQuiz } from "./context/QuizContext";

export default function Question() {
  const { questions, answer, dispatch, index } = useQuiz()
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Option dispatch={dispatch} question={questions[index]} answer={answer} />
    </div>
  );
}
