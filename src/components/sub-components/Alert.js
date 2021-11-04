import React from "react";
import useFunction from "../../hooks/useFunction";
import "./Alert.scss";

export default function Alert() {
  const { handleBackSmooth, handleBack } = useFunction();
  return (
    <div className="preBackCon w-full flex justify-center items-center">
      <div className="preBack flex justify-center items-center flex-col">
        <h1>If you go back your progress will be lost!</h1>
        <h1>Do you still want to go back ?</h1>
        <div className="w-full flex justify-evenly items-center">
          <button onClick={() => handleBackSmooth()}>No</button>
          <button onClick={() => handleBack()}>Yes</button>
        </div>
      </div>
    </div>
  );
}
