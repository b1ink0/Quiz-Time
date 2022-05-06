import React from "react";
import "./MyQuizzesSub.scss";
import copySvg from ".././media/copy.svg";
import edit from ".././media/edit.svg";
import { useStateContext } from "../../context/StateContext";
import useFunction from "../../hooks/useFunction";

export default function MyQuizzesSub({ q }) {
  const { setMyQuizEdit, setMyQuizEditCon } = useStateContext();
  const { handleCopy } = useFunction();
  const handleEdit = (quizCode, quizName) => {
    setMyQuizEdit(true);
    setMyQuizEditCon({
      quizCode: quizCode,
      quizName: quizName,
    });
  };

  const handleCopyCode = (e) => {
    var input = document.createElement("input");
    input.setAttribute("value", e.target.innerText);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand("copy");
    document.body.removeChild(input);
    return result;
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col text-center relative">
        <h1 className="">{q.quizName}</h1>
        <img
          src={edit}
          onClick={() => handleEdit(q.quizCode, q.quizName)}
          className="imgEdit w-6 h-6 absolute right-2 top-2 rounded-full cursor-pointer"
          alt="copy"
        />
        <p
          className="w-11/12 relative rounded-full flex justify-center items-center mt-2 mb-3 p-1 font-black cursor-pointer"
          onClick={(e) => handleCopyCode(e)}
        >
          <span>{q.quizCode}</span>
          <img
            className="w-6 h-6 absolute pointer-events-none right-3"
            src={copySvg}
            alt="copy"
          />
        </p>
        <button
          className="copyUrl"
          type="button"
          onClick={() =>
            handleCopy(
              `https://b1ink0.github.io/Quiz-Time/?quiz_code=${q.quizCode}`
            )
          }
        >
          Copy Url
        </button>
      </div>
    </>
  );
}
