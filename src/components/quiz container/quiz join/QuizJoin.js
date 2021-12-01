import React, { useState } from "react";
import useFunction from "../../../hooks/useFunction";
import "./QuizJoin.scss";

export default function QuizJoin() {
  const [quizCode, setQuizCode] = useState("");
  const { handleQuizSearch } = useFunction();
  return (
    <div className="quizSearchCon w-full flex justify-center items-center flex-col mt-5">
      <div className="quizSearch flex justify-center items-center flex-col p-2">
        <h1>Join Quiz</h1>
        <form
          className="quizSearchInputCon w-full flex justify-center items-center flex-col mt-4"
          onSubmit={(e) => handleQuizSearch(e)}
        >
          <div className="bg-transparent w-10/12 rounded-full relative flex justify-center items-center text-center">
            <input
              type="number"
              value={quizCode}
              onChange={(e) => setQuizCode(e.target.value)}
              className="bg-transparent w-full rounded-full"
            />
            {quizCode === "" && (
              <span className="absolute pointer-events-none opacity-50">
                Enter Quiz Code
              </span>
            )}
          </div>
          <button type="submit">Join</button>
        </form>
      </div>
    </div>
  );
}
