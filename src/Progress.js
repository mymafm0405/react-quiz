import React from "react";

export default function Progress({ index, numOfQuestions, answer, points, maxPoints }) {
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        <strong>{index + 1}</strong> / {numOfQuestions} Questions
      </p>
      <p>
        <strong>{points} / {maxPoints} points</strong>
      </p>
    </header>
  );
}
