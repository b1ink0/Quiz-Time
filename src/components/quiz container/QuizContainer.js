import React from "react";
import { useStateContext } from "../../context/StateContext";
import useFunction from "../../hooks/useFunction";
import Leaderboard from "../leaderboard/Leaderboard";
import Back from "../sub-components/Back";
import Loading from "../sub-components/Loading";
import QuizCreateStart from "./quiz create start/QuizCreateStart";
import QuizCreate from "./quiz create/QuizCreate";
import QuizSearch from "./quiz join/QuizJoin";
import "./QuizContainer.scss";

export default function QuizContainer() {
  const {
    quizExist,
    quizName,
    quizGiven,
    userScore,
    totalScore,
    displayLeaderboard,
    leaderboardLoading,
    displayQuizSearch,
    displayQuizStart,
    displayQuizCreate,
  } = useStateContext();
  const { handleLeaderboard, handleQuizGiven } = useFunction();
  return (
    <>
      {displayQuizCreate ? (
        <>
          <Back option={2} />
          <QuizCreate />
        </>
      ) : (
        <>
          {displayQuizSearch && <QuizSearch />}
          <div className="quizContainerHr w-full flex justify-center items-center mt-5 mb-5">
            <span className="w-10/12 rounded-full"></span>
            <h1 className="text-center">OR</h1>
            <span className="w-10/12 rounded-full"></span>
          </div>
          {displayQuizStart && <QuizCreateStart />}
        </>
      )}
      {/* <div className="quizPrevCon flex justify-center items-center w-full flex-col mt-5">
        <div className="quizCon flex justify-center items-center flex-col text-center">
          <h1 className="w-full text-center">{quizName}</h1>
          {quizGiven ? (
            <div className="flex justify-center items-center flex-col w-full text-center">
              <p className="w-full text-center">
                You have already submited the quiz!
              </p>
              <p
                className="text-center cursor-pointer"
                onClick={() => handleLeaderboard()}
              >
                Leaderboard
              </p>
              <h1 className="w-full text-center">
                Your Score: {userScore}/{totalScore}
              </h1>
            </div>
          ) : (
            <>
              <p
                className="text-center cursor-pointer"
                onClick={() => handleQuizGiven()}
              >
                Click To Start The Quiz
              </p>
              <p
                className="text-center cursor-pointer"
                onClick={() => handleLeaderboard()}
              >
                Leaderboard
              </p>
            </>
          )}
        </div>
      </div> */}
      {/* {displayLeaderboard && <Leaderboard />} */}
      {/* {leaderboardLoading && <Loading flag="true" />} */}
    </>
  );
}
