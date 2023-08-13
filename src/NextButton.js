import React from "react";

export default function NextButton({
  dispatch,
  answer,
  index,
  numOfQuestions,
}) {
  const status = index < (numOfQuestions - 1) ? "nextQuestion" : "finished";
  console.log(status)
  if (answer === null) return null;
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: status })}>
      {status === 'nextQuestion' ? 'Next' : 'Finish'}
    </button>
  );
}
