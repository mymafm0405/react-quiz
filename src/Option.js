import React from "react";

export default function Option({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
    return (
    <div className="options">
      {question.options.map((opt, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${hasAnswered ? index  === question.correctOption ? 'correct' : 'wrong' : ''}`}
          key={opt}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "answer", payload: index })}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}