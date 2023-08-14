import React from "react";
import Option from "./Option";

export default function Question({ question, answer, dispatch }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Option dispatch={dispatch} question={question} answer={answer} />
    </div>
  );
}
