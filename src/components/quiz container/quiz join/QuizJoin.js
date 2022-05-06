import React, { useEffect, useState, useRef } from "react";
import { useStateContext } from "../../../context/StateContext";
import useFunction from "../../../hooks/useFunction";
import GivenQuizzes from "../given quizzes/GivenQuizzes";
import queryString from "query-string/";
import "./QuizJoin.scss";

export default function QuizJoin() {
  const joinBtnRef = useRef(null);
  const { quizCode, setQuizCode, givenQuizzes } = useStateContext();
  const { handleQuizSearch, handleGivenQuizzes } = useFunction();
  const [flag_1, setFlag_1] = useState(false);
  const [flag_2, setFlag_2] = useState(false);
  const [flag_3, setFlag_3] = useState(false);
  const [flag_4, setFlag_4] = useState(false);

  const handleQuizCode = (e) => {
    setQuizCode(e.target.value);
  };

  useEffect(() => {
    handleGivenQuizzes();
    const parsed = queryString.parse(window.location.search);
    if (parsed.quiz_code) {
      console.log(parsed.quiz_code);
      setQuizCode(parsed.quiz_code);
    }
  }, []);

  return (
    <div className="quizSearchCon w-full flex justify-center items-center flex-col mt-5">
      <div className="quizSearch flex justify-center items-center flex-col p-2">
        <h1>Join Quiz</h1>
        <form
          className="quizSearchInputCon w-full flex justify-center items-center flex-col mt-4"
          onSubmit={(e) =>
            handleQuizSearch(
              e,
              quizCode,
              setFlag_1,
              setFlag_2,
              setFlag_3,
              setFlag_4
            )
          }
        >
          <div className="bg-transparent w-10/12 rounded-full relative flex justify-center items-center text-center">
            <input
              type="number"
              value={quizCode}
              onChange={(e) => handleQuizCode(e)}
              className="bg-transparent w-full rounded-full"
              required
            />
            {quizCode === "" && (
              <span className="absolute pointer-events-none opacity-50">
                Enter Quiz Code
              </span>
            )}
          </div>
          <div className="quizCodeInvalid mt-3 text-red-600 font-bold text-center">
            {flag_1 && <h1>Quiz Code Invalid!</h1>}
          </div>
          {flag_2 && (
            <div className="quizSubmitted text-green-500 font-bold text-center">
              <h1>You Have Already Submitted The Quiz!</h1>
            </div>
          )}
          {flag_3 && (
            <div className="quizSubmitted text-green-500 font-bold text-center">
              <h1>Quiz Not Started Yet!</h1>
            </div>
          )}
          {flag_4 && (
            <div className="quizCodeInvalid text-red-600 font-bold text-center">
              <h1>Quiz Has Ended!</h1>
            </div>
          )}
          <button ref={joinBtnRef} type="submit">
            Join
          </button>
        </form>
        {givenQuizzes && givenQuizzes[0] !== undefined && (
          <>
            <div className="dash w-full rounded-full mt-3 mb-3"></div>
            <GivenQuizzes givenQuizzes={givenQuizzes} />
          </>
        )}
      </div>
    </div>
  );
}
