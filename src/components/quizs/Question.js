import React, { useState, useEffect } from "react";
import { useStateContext } from "../../context/StateContext";
import "../dashboard/Dashboard.scss";
import "./Quiz.scss";

export default function Question({ quiz }) {
  const { tempAnswer, setTempAnswer, setQuizComplete } = useStateContext();
  const [loading, setLoading] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [quizLength, setQuizLength] = useState(0);
  let arr = tempAnswer;
  if (arr[0] === undefined) {
    quiz.map((a) => {
      arr.push({
        qNo: a.qNo,
        answer: "",
        solved: false,
      });
    });
  }
  useState(() => {
    setQuizLength(quiz.length - 1);
  }, []);
  const handleSelection = (e) => {
    arr.forEach((a) => {
      if (parseInt(e.target.name) === a.qNo) {
        let tempA;
        quiz.forEach((q) => {
          if (q.qNo === a.qNo) {
            tempA = e.target.value;
          }
        });
        let temp = {
          qNo: parseInt(e.target.name),
          answer: tempA,
          solved: true,
        };
        arr[a.qNo - 1] = temp;
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let solved = 0;
    arr.forEach((q) => {
      if (q.solved) {
        solved++;
      }
    });
    if (solved === quiz.length) {
      console.log("submited");
      setTempAnswer(arr);
      setQuizComplete(true);
    }
  };
  const handlePrevBtn = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };
  const handleNextBtn = () => {
    if (currentQ < quizLength) {
      setCurrentQ(currentQ + 1);
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="qForm relative flex justify-center items-center w-full flex-col text-center"
      >
        <div className="queCon flex justify-center items-center flex-col overflow-hidden">
          <div className="qCon">
            <h1>{quiz[currentQ].q}</h1>
          </div>
          <div className="options w-full">
            <div className="optionsRow1 flex justify-evenly items-center">
              <div className="radioBtnCon relative flex justify-center items-center">
                <label>{quiz[currentQ].a}</label>
                <input
                  className="absolute"
                  type="radio"
                  value="a"
                  name={quiz[currentQ].qNo}
                  onChange={(e) => handleSelection(e)}
                  required
                />
              </div>
              <div className="radioBtnCon relative flex justify-center items-center">
                <label>{quiz[currentQ].b}</label>
                <input
                  className="absolute"
                  type="radio"
                  value="b"
                  name={quiz[currentQ].qNo}
                  onChange={(e) => handleSelection(e)}
                  required
                />
              </div>
            </div>
            <div className="optionsRow2 flex justify-evenly items-center">
              <div className="radioBtnCon relative flex justify-center items-center">
                <label>{quiz[currentQ].c}</label>
                <input
                  className="absolute"
                  type="radio"
                  value="c"
                  name={quiz[currentQ].qNo}
                  onChange={(e) => handleSelection(e)}
                  required
                />
              </div>
              <div className="radioBtnCon relative flex justify-center items-center">
                <label>{quiz[currentQ].d}</label>
                <input
                  className="absolute"
                  type="radio"
                  value="d"
                  name={quiz[currentQ].qNo}
                  onChange={(e) => handleSelection(e)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="changeButton w-full flex justify-evenly items-center">
            {currentQ === 0 ? (
              ""
            ) : (
              <button
                className="prevBtn"
                type="button"
                onClick={() => handlePrevBtn()}
              >
                Prev
              </button>
            )}
            {currentQ >= quizLength ? (
              ""
            ) : (
              <button
                className="nextBtn"
                type="button"
                onClick={() => handleNextBtn()}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <button className="submitCon" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
