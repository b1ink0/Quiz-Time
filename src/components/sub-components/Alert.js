import React, { useRef, useState } from "react";
import { useStateContext } from "../../context/StateContext";
import "./Alert.scss";

export default function Alert({ setDisplayAlert }) {
  const { setDisplayQuizCreate } = useStateContext();
  const preBackConRef = useRef();
  const handleYes = () => {
    setDisplayQuizCreate(false);
  };
  const handleNo = () => {
    preBackConRef.current.classList.toggle("fadeOut");
    setTimeout(() => {
      setDisplayAlert(false);
    }, 400);
  };
  return (
    <div
      className="preBackCon w-full flex justify-center items-center"
      ref={preBackConRef}
    >
      <div className="preBack flex justify-center items-center flex-col">
        <h1>If you go back your progress will be lost!</h1>
        <h1>Do you still want to go back ?</h1>
        <div className="w-full flex justify-evenly items-center">
          <button onClick={() => handleNo()}>No</button>
          <button onClick={() => handleYes()}>Yes</button>
        </div>
      </div>
    </div>
  );
}
