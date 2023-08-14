import React from "react";
import { useQuiz } from "./context/QuizContext";

export default function Progress() {
  const { index, questions, answer, points, maxPoints } = useQuiz()
  return (
    <header className="progress">
      <progress max={questions.length} value={index + Number(answer !== null)} />
      <p>
        <strong>{index + 1}</strong> / {questions.length} Questions
      </p>
      <p>
        <strong>{points} / {maxPoints} points</strong>
      </p>
    </header>
  );
}
