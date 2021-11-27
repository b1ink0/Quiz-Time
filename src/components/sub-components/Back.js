import React from "react";
import { useStateContext } from "../../context/StateContext";
import useFunction from "../../hooks/useFunction";
import "./Back.scss";

export default function Back({ option }) {
  const { setDisplayQuizCreate } = useStateContext();
  const { handleDirectBack } = useFunction();
  const handleBack = () => {
    switch (option) {
      case 1:
        handleDirectBack();
        break;
      case 2:
        
        setDisplayQuizCreate(false);
        break;
      default:
        break;
    }
  };
  return (
    <div
      className="back absolute flex justify-center items-center flex-col"
      onClick={() => handleBack()}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
