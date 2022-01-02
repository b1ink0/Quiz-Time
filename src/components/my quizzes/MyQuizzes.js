import React from "react";
import { useStateContext } from "../../context/StateContext";
import "./MyQuizzes.scss";
import MyQuizzesSub from "./MyQuizzesSub";
import MyQuizzesEdit from "./MyQuizzesEdit";

export default function MyQuizzes() {
  const { myQuizzes, myQuizEdit } = useStateContext();
  return (
    <>
      {myQuizEdit && <MyQuizzesEdit />}
      <div className="myQuizzesCon w-full flex justify-center items-center flex-col mt-5 mb-10">
        <div className="myQuizzes w-4/5 flex justify-center items-center flex-col">
          <h1 className="text-center">My Quizzes</h1>
          <div className="quizzes w-full flex justify-center items-center flex-col">
            {myQuizzes &&
              myQuizzes.map((q) => <MyQuizzesSub q={q} key={q.quizCode} />)}
          </div>
        </div>
      </div>
    </>
  );
}
