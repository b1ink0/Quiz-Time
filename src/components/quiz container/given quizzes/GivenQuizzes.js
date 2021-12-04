import React from "react";
import useFunction from "../../../hooks/useFunction";
import "./GivenQuizzes.scss";
export default function GivenQuizzes({ givenQuizzes }) {
  const { handleViewGivenQuiz } = useFunction();
  return (
    <div className="givenQuizzesCon w-full flex justify-center items-center flex-col text-center">
      <h1>Given Quizzes</h1>
      <div className="givenQuizzes w-full flex justify-center items-center flex-col text-center">
        {givenQuizzes &&
          givenQuizzes.map((quiz) => (
            <button
              key={quiz.quizCode}
              type="button"
              onClick={() => handleViewGivenQuiz(quiz.quizCode)}
            >
              {quiz.quizName}
            </button>
          ))}
      </div>
    </div>
  );
}
