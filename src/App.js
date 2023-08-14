import React, { useEffect, useReducer } from "react";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartPage from "./StartPage";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "./context/QuizContext";

export default function App() {
  const { dispatch, status } = useQuiz()

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartPage />
        )}
        {status === "active" && (
          <>
            <Progress

            />
            <Question
            />
            <Footer>
              <Timer />
              <NextButton

              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishedScreen
          />
        )}
      </Main>
    </div>
  );
}
