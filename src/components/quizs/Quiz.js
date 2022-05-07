import React from "react";
import { useStateContext } from "../../context/StateContext";
import Question from "./Question";
import "./Quiz.scss";
import Loading from "../sub-components/Loading";

export default function Quiz() {
  const { quiz, quizComplete, tempAnswer, score, loading_1, valid } =
    useStateContext();

  return (
    <>
      {!quizComplete ? (
        <Question quiz={quiz} />
      ) : !quizComplete ? (
        "Quiz Does Not Exist"
      ) : !loading_1 ? (
        <div className="resultCon w-full flex justify-center items-center">
          <div className="result flex justify-center items-center flex-col">
            {valid ? (
              <>
                <h1>
                  Your Score: {score}/{tempAnswer.length}
                </h1>
                <h1>Quiz has been submited!</h1>
              </>
            ) : (
              <>
                <h1 className="invalid text-red-600">Time Limit Exceeded!</h1>
                <h1>Unfortunately Your Response Will Not Be Considered</h1>
              </>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
