import React from "react";
import { useStateContext } from "../../context/StateContext";
import useFunction from "../../hooks/useFunction";
import Leaderboard from "../leaderboard/Leaderboard";
import Loading from "../sub-components/Loading";

export default function QuizContainer() {
  const {
    quizExist,
    quizName,
    quizGiven,
    userScore,
    totalScore,
    displayLeaderboard,
    leaderboardLoading,
  } = useStateContext();
  const { handleLeaderboard, handleQuizGiven } = useFunction();
  return quizExist ? (
    <>
      <div className="quizPrevCon flex justify-center items-center w-full flex-col mt-5">
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
      </div>
      {displayLeaderboard && <Leaderboard />}
      {leaderboardLoading && <Loading flag="true" />}
    </>
  ) : (
    <h1 className="w-full text-center">"Quiz are not avilable yet!"</h1>
  );
}
