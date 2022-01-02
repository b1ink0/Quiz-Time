import React from "react";
import { useStateContext } from "../../context/StateContext";
import MyQuizzes from "../my quizzes/MyQuizzes";
import Quiz from "../quizs/Quiz";
import Back from "../sub-components/Back";
import ViewGivenQuiz from "./given quizzes/ViewGivenQuiz";
import QuizCreateStart from "./quiz create start/QuizCreateStart";
import QuizCreate from "./quiz create/QuizCreate";
import QuizSearch from "./quiz join/QuizJoin";
import "./QuizContainer.scss";

export default function QuizContainer() {
  const {
    displayQuizSearch,
    displayQuizStart,
    displayQuizCreate,
    myQuizzes,
    displayQuiz_1,
    displayGivenQuiz,
  } = useStateContext();
  return (
    <>
      {displayQuizCreate ? (
        <>
          <Back option={1} />
          <QuizCreate />
        </>
      ) : (
        <>
          {displayQuiz_1 ? (
            <>
              <Back option={2} />
              <Quiz />
            </>
          ) : displayGivenQuiz ? (
            <>
              <Back option={3} />
              <ViewGivenQuiz />
            </>
          ) : (
            <>
              {displayQuizSearch && <QuizSearch />}
              {myQuizzes[0] === undefined ? (
                <>
                  <div className="quizContainerHr w-full flex justify-center items-center mt-5 mb-5">
                    <span className="w-10/12 rounded-full"></span>
                    <h1 className="text-center">OR</h1>
                    <span className="w-10/12 rounded-full"></span>
                  </div>
                  {displayQuizStart && <QuizCreateStart />}
                </>
              ) : (
                <>
                  {displayQuizStart && <QuizCreateStart margin={true} />}
                  <MyQuizzes />
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
