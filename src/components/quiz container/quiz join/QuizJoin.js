import React, { useState } from "react";
import useFunction from "../../../hooks/useFunction";
import "./QuizJoin.scss";

export default function QuizJoin() {
  const [quizCode, setQuizCode] = useState();
  const { handleQuizSearch } = useFunction();
  return (
    <div className="quizSearchCon w-full flex justify-center items-center flex-col mt-5">
      <div className="quizSearch flex justify-center items-center flex-col p-2">
        <h1>Join Quiz</h1>
        <form
          className="quizSearchInputCon w-full flex justify-center items-center flex-col mt-4"
          onSubmit={handleQuizSearch}
        >
          <input
            type="number"
            min="100000"
            max="999999"
            value={quizCode}
            onChange={(e) => setQuizCode(e.target.value)}
            className="bg-transparent w-10/12 rounded-full"
            placeholder="Enter Quiz Code"
          />
          <button type="submit">Join</button>
        </form>
      </div>
    </div>
  );
}
