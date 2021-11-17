import React from "react";
import useFunction from "../../../hooks/useFunction";
import "./QuizCreateStart.scss";

export default function QuizCreateStart() {
  const { handelQuizCreateDisplay } = useFunction();
  return (
    <div className="quizCreateStartCon w-full flex justify-center items-center flex-col">
      <div className="quizCreate w-4/5 flex justify-center items-center flex-col">
        <h1 className="text-center">Create New Quiz</h1>
        <button onClick={() => handelQuizCreateDisplay()} className="">
          Create +
        </button>
      </div>
    </div>
  );
}
