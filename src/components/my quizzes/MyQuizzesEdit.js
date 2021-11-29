import React, { useRef } from "react";
import { useStateContext } from "../../context/StateContext";
import useFunction from "../../hooks/useFunction";
import "./MyQuizzesEdit.scss";

export default function MyQuizzesEdit() {
  const { myQuizEditCon, setMyQuizEditCon, setMyQuizEdit } = useStateContext();
  const { handleDeleteQuiz } = useFunction();
  const quizEditConRef = useRef();
  const handleDelete = (quizCode) => {
    handleDeleteQuiz(quizCode).then(() => {
      handleCancel();
    });
  };
  const handleCancel = () => {
    quizEditConRef.current.classList.toggle("fadeOut");
    setTimeout(() => {
      setMyQuizEdit(false);
      setMyQuizEditCon({
        quizCode: "",
        quizName: "",
      });
    }, 400);
  };
  return (
    <div
      ref={quizEditConRef}
      className="quizEditCon fixed w-screen h-screen top-0 left-0 z-10 flex justify-center items-center"
    >
      <div className="quizEdit flex justify-center items-center flex-col text-center">
        <h1>{myQuizEditCon.quizName}</h1>
        <div className="flex justify-center items-center w-11/12 mb-6 mt-2">
          <button onClick={() => handleDelete(myQuizEditCon.quizCode)}>
            Delete
          </button>
          <button onClick={() => handleCancel()}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
