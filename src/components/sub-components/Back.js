import React, { useState } from "react";
import { useStateContext } from "../../context/StateContext";
import useFunction from "../../hooks/useFunction";
import Alert from "./Alert";
import "./Back.scss";

export default function Back({ option }) {
  const { setDisplayQuizCreate } = useStateContext();
  const { handleDirectBack } = useFunction();
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
        setDisplayQuizCreate(false);
        break;
      default:
        break;
    }
  };
  return (
    <>
      {displayAlert && <Alert setDisplayAlert={setDisplayAlert} />}
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
