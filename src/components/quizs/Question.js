import React, { useState, useRef, useEffect } from "react";
import { useStateContext } from "../../context/StateContext";
import useFunction from "../../hooks/useFunction";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../dashboard/Dashboard.scss";
import "./Quiz.scss";

export default function Question({ quiz }) {
  const { tempAnswer, setTempAnswer, setLoading } = useStateContext();
  const { handleSubmission } = useFunction();
  const [submitBtnOn, setSubmitBtnOn] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [quizLength, setQuizLength] = useState(0);
  const [optionHeight, setOptionHeight] = useState("auto");
  const optionA = useRef(null);
  const optionB = useRef(null);
  const optionC = useRef(null);
  const optionD = useRef(null);
  let arr = tempAnswer;
  if (arr[0] === undefined) {
    quiz.forEach((a) => {
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
        let inputSelect = document.querySelector(
          `.${e.target.value}${e.target.name}`
        );
        let tempArr = ["a", "b", "c", "d"];
        tempArr.forEach((r) => {
          if (r === e.target.value) {
            if (inputSelect.classList[6] === undefined) {
              inputSelect.classList.toggle("radioBtnSelected");
            }
          } else {
            if (
              document.querySelector(`.${r}${e.target.name}`).classList[6] ===
              "radioBtnSelected"
            ) {
              document
                .querySelector(`.${r}${e.target.name}`)
                .classList.toggle("radioBtnSelected");
            }
          }
        });
      }
    });
    handleUpdateSubmitBtn();
  };
  const handleUpdateSubmitBtn = () => {
    let solved = 0;
    arr.forEach((q) => {
      if (q.solved) {
        solved++;
      }
    });
    if (solved === quiz.length) {
      setSubmitBtnOn(true);
    }
  };
  const handleSelected = (e, condition) => {
    if (!condition) {
      if (arr[e].answer !== "") {
        try {
          let temp = arr[e].answer + (parseInt(e) + 1);
          setTimeout(() => {
            document.getElementById(temp).classList.toggle("radioBtnSelected");
          }, 100);
        } catch {
          console.log("not active");
        }
      }
    } else if (condition) {
      if (arr[e - 2].answer !== "") {
        try {
          let temp = arr[e - 2].answer + (e - 1);
          setTimeout(() => {
            document.getElementById(temp).classList.toggle("radioBtnSelected");
          }, 100);
        } catch {
          console.log("not active");
        }
      }
    }
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
      setTempAnswer(arr);
      setSubmitBtnOn(true);
      // setQuizComplete(true);
      handleSubmission();
      setLoading(true);
    }
  };
  const handlePrevBtn = (e) => {
    setOptionHeight("auto");
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
    handleSelected(parseInt(e.target.value), true);
  };
  const handleNextBtn = (e) => {
    setOptionHeight("auto");
    if (currentQ < quizLength) {
      setCurrentQ(currentQ + 1);
    }
    handleSelected(parseInt(e.target.value), false);
  };

  useEffect(() => {
    setOptionHeight(
      Math.max(
        optionA.current.offsetHeight,
        optionB.current.offsetHeight,
        optionC.current.offsetHeight,
        optionD.current.offsetHeight
      ).toString()
    );
  }, [currentQ]);

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="qForm relative flex justify-center items-center w-full flex-col text-center"
      >
        <div className="queCon flex justify-center items-center flex-col overflow-hidden">
          <div className="queTopCon flex justify-between items-center w-full">
            <h1>Q-{quiz[currentQ].qNo}</h1>
            <h1>
              {currentQ + 1}/{quiz.length}
            </h1>
          </div>
          <div className="w-5/6 qCon mt-2 flex flex-col justify-center items-center">
            <h1 className="break-all p-2">{quiz[currentQ].q}</h1>
            <div className="qConSub w-full mt-2 mb-4 p-5 flex flex-col justify-center items-center">
              {quiz[currentQ].imageUrl && <img src={quiz[currentQ].imageUrl} />}
              {quiz[currentQ].audioUrl && (
                <AudioPlayer src={quiz[currentQ].audioUrl} />
              )}
            </div>
          </div>
          <div className="options w-full">
            <div className="optionsRow1 flex justify-evenly items-center flex-col lg:flex-row">
              <div
                className={`radioBtnCon relative flex justify-center items-center a${quiz[currentQ].qNo}`}
                id={`a${quiz[currentQ].qNo}`}
              >
                <label
                  className="break-all p-2"
                  ref={optionA}
                  style={{
                    height:
                      optionHeight === "auto" ? "auto" : optionHeight + "px",
                  }}
                >
                  {quiz[currentQ].a}
                </label>
                <input
                  className="absolute cursor-pointer"
                  type="radio"
                  value="a"
                  name={quiz[currentQ].qNo}
                  onClick={(e) => handleSelection(e)}
                  required
                />
              </div>
              <div
                className={`radioBtnCon relative flex justify-center items-center b${quiz[currentQ].qNo}`}
                id={`b${quiz[currentQ].qNo}`}
              >
                <label
                  className="break-all p-2"
                  ref={optionB}
                  style={{
                    height:
                      optionHeight === "auto" ? "auto" : optionHeight + "px",
                  }}
                >
                  {quiz[currentQ].b}
                </label>
                <input
                  className="absolute cursor-pointer"
                  type="radio"
                  value="b"
                  name={quiz[currentQ].qNo}
                  onClick={(e) => handleSelection(e)}
                  required
                />
              </div>
            </div>
            <div className="optionsRow2 flex justify-evenly items-center flex-col lg:flex-row">
              <div
                className={`radioBtnCon relative flex justify-center items-center c${quiz[currentQ].qNo}`}
                id={`c${quiz[currentQ].qNo}`}
              >
                <label
                  className="break-all p-2"
                  ref={optionC}
                  style={{
                    height:
                      optionHeight === "auto" ? "auto" : optionHeight + "px",
                  }}
                >
                  {quiz[currentQ].c}
                </label>
                <input
                  className="absolute cursor-pointer"
                  type="radio"
                  value="c"
                  name={quiz[currentQ].qNo}
                  onClick={(e) => handleSelection(e)}
                  required
                />
              </div>
              <div
                className={`radioBtnCon relative flex justify-center items-center d${quiz[currentQ].qNo}`}
                id={`d${quiz[currentQ].qNo}`}
              >
                <label
                  className="break-all p-2"
                  ref={optionD}
                  style={{
                    height:
                      optionHeight === "auto" ? "auto" : optionHeight + "px",
                  }}
                >
                  {quiz[currentQ].d}
                </label>
                <input
                  className="absolute cursor-pointer"
                  type="radio"
                  value="d"
                  name={quiz[currentQ].qNo}
                  onClick={(e) => handleSelection(e)}
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
                value={quiz[currentQ].qNo}
                onClick={(e) => handlePrevBtn(e)}
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
                value={quiz[currentQ].qNo}
                onClick={(e) => handleNextBtn(e)}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <button
          className={`submitCon ${submitBtnOn && "opacitySubmitBtn"}`}
          disabled={!submitBtnOn}
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}
