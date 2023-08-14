import React from "react";

export default function FinishedScreen({ points, maxPoints, highestScore, dispatch }) {
  const percent = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You have scored {points} out of {maxPoints} points ({Math.ceil(percent)}
        %)
      </p>
      <p className="highscore">Highest score is: {highestScore}</p>
      <button className="btn btn-ui" onClick={() => dispatch({type: 'restart'})}>Restart Quiz</button>
    </>
  );
}
