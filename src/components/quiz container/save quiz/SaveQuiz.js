import React, { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useStateContext } from "../../../context/StateContext";
import { database } from "../../../firebase";
import "./SaveQuiz.scss";

export default function SaveQuiz({ quiz, answer, questionCount, quizName }) {
  const { setDisplaySaveQuiz, setDisplayQuizCreate } = useStateContext();
  const [code, setCode] = useState();
  const { currentUser } = useAuth();
  useEffect(() => {
    let com;
    let tQ = [];
    let tA = [];
    let count = 1;
    for (let i = 0; i < quiz.length; i++) {
      let tq = {
        qNo: count,
        q: quiz[i].q,
        a: quiz[i].a,
        b: quiz[i].b,
        c: quiz[i].c,
        d: quiz[i].d,
      };
      let ta = {
        qNo: count,
        answer: answer[i].answer,
      };
      tQ.push(tq);
      tA.push(ta);
      count++;
    }
    if (currentUser) {
      let quizCode = Math.floor(Math.random() * 1000000).toString();
      setCode(quizCode);
      com = database.quizs
        .doc(quizCode)
        .get()
        .then((doc) => {
          if (doc.exists) {
            return;
          } else {
            // database.quizs.doc(quizCode).set({
            //   quizContainer: {
            //     quiz: tQ,
            //     quizName: quizName,
            //   },
            //   uid: currentUser.uid,
            // });
            // database.answers.doc(quizCode).set({
            //   quizAnswerContainer: {
            //     quizAnswer: tA,
            //     quizName: quizName,
            //   },
            //   uid: currentUser.uid,
            // });
          }
        });
    }
    return com;
  }, []);
  const handleCopyCode = (e) => {
    var input = document.createElement("input");
    input.setAttribute("value", e.target.innerText);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand("copy");
    document.body.removeChild(input);
    return result;
  };
  const handleClose = () => {
    console.log("run");
    setDisplaySaveQuiz(false);
    setDisplayQuizCreate(false);
  };
  return (
    <div className="save-wrapper fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="save-wrapper-1 w-5/6 text-center flex justify-center items-center flex-col">
        <h1 className="mb-1">Quiz Name: {quizName}</h1>
        <h1 className="mb-2">Total Questions: {questionCount - 1}</h1>
        <h3>Copy The Code Below</h3>
        <p
          className="w-5/6 rounded-full flex justify-center items-center mt-2 mb-2 p-1 font-black"
          onClick={(e) => handleCopyCode(e)}
        >
          <h2 className="mr-1">{code}</h2>
          <span className="ml-1">copy</span>
        </p>
        <button onClick={() => handleClose()}>OK</button>
      </div>
    </div>
  );
}
