import React from "react";
import { useStateContext } from "../../context/StateContext";
import "./MyQuizzes.scss";
import copySvg from ".././media/copy.svg";
import edit from ".././media/edit.svg";

const handleCopyCode = (e) => {
  var input = document.createElement("input");
  input.setAttribute("value", e.target.innerText);
  document.body.appendChild(input);
  input.select();
  var result = document.execCommand("copy");
  document.body.removeChild(input);
  return result;
};

export default function MyQuizzes() {
  const { myQuizzes } = useStateContext();
  return (
    <div className="myQuizzesCon w-full flex justify-center items-center flex-col mt-5 mb-10">
      <div className="myQuizzes w-4/5 flex justify-center items-center flex-col">
        <h1 className="text-center">My Quizzes</h1>
        <div className="quizzes w-full flex justify-center items-center flex-col">
          {myQuizzes &&
            myQuizzes.map((q) => (
              <div
                className="flex justify-center items-center flex-col text-center relative"
                onClick={(e) => handleCopyCode(e)}
              >
                <h1 className="">{q.quizName}</h1>
                <img
                  src={edit}
                  className="imgEdit w-6 h-6 absolute right-2 top-2 rounded-full"
                />
                <p className="w-11/12 relative rounded-full flex justify-center items-center mt-2 mb-3 p-1 font-black">
                  <h1>{q.quizCode}</h1>
                  <img
                    className="w-6 h-6 absolute pointer-events-none right-3"
                    src={copySvg}
                  />
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
