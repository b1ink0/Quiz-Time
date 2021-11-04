import React from "react";
import useFunction from "../../hooks/useFunction";
import "./Back.scss";

export default function Back() {
  const { handleDirectBack } = useFunction();
  return (
    <div
      className="back absolute flex justify-center items-center flex-col"
      onClick={() => handleDirectBack()}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
