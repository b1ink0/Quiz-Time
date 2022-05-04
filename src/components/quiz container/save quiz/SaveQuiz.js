import React, { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useStateContext } from "../../../context/StateContext";
import { database } from "../../../firebase";
import rn from "random-number";
import copySvg from "../../media/copy.svg";
import copiedSvg from "../../media/copied.svg";
import "./SaveQuiz.scss";
import useFunction from "../../../hooks/useFunction";

export default function SaveQuiz({
  quiz,
  answer,
  questionCount,
  quizName,
  startTime,
  endTime,
}) {
  const { setDisplaySaveQuiz, setDisplayQuizCreate } = useStateContext();
  const { handleMyQuizzes } = useFunction();
  const [copied, setCopied] = useState(false);
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
        imageUrl: quiz[i].imageUrl,
        audioUrl: quiz[i].audioUrl,
      };
      let ta = {
        qNo: count,
        answer: answer[i].answer,
      };
      tQ.push(tq);
      tA.push(ta);
      count++;
    }
    const randomNumber = rn.generator({
      min: 100000,
      max: 999999,
      integer: true,
    });
    if (currentUser) {
      let quizCode = randomNumber();
      setCode(quizCode);
      com = database.quizs
        .doc(quizCode.toString())
        .get()
        .then(async (doc) => {
          if (doc.exists) {
            return;
          } else {
            database.quizs.doc(quizCode.toString()).set({
              quizContainer: {
                quiz: [
                  {
                    quiz: tQ,
                    quizName: quizName,
                    startTime: startTime,
                    endTime: endTime,
                  },
                ],
              },
              uid: currentUser.uid,
            });
            database.answers.doc(quizCode.toString()).set({
              quizAnswerContainer: {
                quizAnswer: [
                  {
                    quizAnswer: tA,
                    quizName: quizName,
                    startTime: startTime,
                    endTime: endTime,
                  },
                ],
              },
              uid: currentUser.uid,
            });
            database.results.doc(quizCode.toString()).set({
              quizResultContainer: {
                quizName: quizName,
                submissions: [],
                startTime: startTime,
                endTime: endTime,
              },
            });
            let temp = database.users
              .doc(currentUser.uid)
              .get()
              .then((doc) => {
                return doc.data().quizzes;
              });
            temp.then((data) => {
              let arr = [];
              if (data !== undefined) {
                arr = data;
              }
              let t = {
                quizName: quizName,
                quizCode: quizCode,
              };
              arr.push(t);
              database.users
                .doc(currentUser.uid)
                .update({
                  quizzes: arr,
                })
                .then(() => {
                  handleMyQuizzes();
                });
            });
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
    setCopied(true);
    return result;
  };
  const handleClose = () => {
    setDisplaySaveQuiz(false);
    setDisplayQuizCreate(false);
  };
  return (
    <div className="save-wrapper fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="save-wrapper-1 w-5/6 text-center flex justify-center items-center flex-col">
        <h1 className="mb-1">
          Quiz Name: <span>{quizName}</span>
        </h1>
        <h1 className="mb-2">
          Total Questions: <span>{questionCount - 1}</span>
        </h1>
        <h3 className="w-full pt-2">Copy The Code Below</h3>
        <p
          className="w-5/6 relative rounded-full flex justify-center items-center mt-2 mb-2 p-1 font-black cursor-pointer"
          onClick={(e) => handleCopyCode(e)}
        >
          <span className="mr-1 text-xl">{code}</span>
          <img
            className="w-6 h-6 absolute right-5 pointer-events-none"
            src={copied ? copiedSvg : copySvg}
            alt="copy"
          />
        </p>
        <button onClick={() => handleClose()}>OK</button>
      </div>
    </div>
  );
}
