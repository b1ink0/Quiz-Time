import React, { useRef } from "react";
import useFunction from "../../../hooks/useFunction";
import { useStateContext } from "../../../context/StateContext";
import "./DeleteGivenQuiz.scss";

export default function DeleteGivenQuiz({ setDisplayDelete }) {
  const { quizGivenName, quizViewCode, setDisplayGivenQuiz } =
    useStateContext();
  const { handleDeleteGivenQuiz } = useFunction();
  const quizEditConRef = useRef();
  const handleDelete = (quizCode) => {
    handleDeleteGivenQuiz(quizCode).then(() => {
      handleCancel();
      setTimeout(() => {
        setDisplayGivenQuiz(false);
      }, 450);
    });
  };
  const handleCancel = async () => {
    quizEditConRef.current.classList.toggle("fadeOut");
    setTimeout(() => {
      setDisplayDelete(false);
    }, 400);
  };
  return (
    <div
      ref={quizEditConRef}
      className="quizEditCon fixed w-screen h-screen top-0 left-0 z-10 flex justify-center items-center"
    >
      <div className="quizEdit flex justify-center items-center flex-col text-center">
        <h1>{quizGivenName}</h1>
        <div className="flex justify-center items-center w-11/12 mb-6 mt-2">
          <button onClick={() => handleDelete(quizViewCode)}>Delete</button>
          <button onClick={() => handleCancel()}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
