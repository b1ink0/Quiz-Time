import React, { useState } from "react";
import { useStateContext } from "../../context/StateContext";
import useFunction from "../../hooks/useFunction";
import Alert from "./Alert";
import "./Back.scss";

export default function Back({ option }) {
  const {
    quizComplete,
    setQuiz,
    setTempAnswer,
    setQuizComplete,
    setQuizCode,
    setDisplayQuiz_2,
    setDisplayGivenQuiz,
  } = useStateContext();
  const [displayAlert, setDisplayAlert] = useState(false);
  const handleAlert = () => {
    if (!displayAlert) {
      setDisplayAlert(true);
    }
  };
  const handleBack = () => {
    switch (option) {
      case 1:
        handleAlert();
        break;
      case 2:
        if (quizComplete) {
          setQuiz([]);
          setTempAnswer([]);
          setQuizComplete(false);
          setQuizCode("");
          setDisplayQuiz_2(false);
        } else {
          handleAlert();
        }
        break;
      case 3:
        setDisplayGivenQuiz(false);
        break;
      default:
        break;
    }
  };
  return (
    <>
      {displayAlert && (
        <Alert setDisplayAlert={setDisplayAlert} option={option} />
      )}
      <div
        className="back absolute flex justify-center items-center flex-col"
        onClick={() => handleBack()}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
