import React, { useState } from "react";
import { useStateContext } from "../../context/StateContext";
import "../dashboard/Dashboard.scss";
import "./Quiz.scss";

export default function Question({ quiz }) {
  const { tempAnswer, setTempAnswer, setQuizComplete } = useStateContext();
  const [submitBtnOn, setSubmitBtnOn] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [quizLength, setQuizLength] = useState(0);
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
      setSubmitBtnOn(true);
      console.log("submited");
      setTempAnswer(arr);
      setQuizComplete(true);
    }
  };
  const handlePrevBtn = (e) => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
    handleSelected(parseInt(e.target.value), true);
  };
  const handleNextBtn = (e) => {
    if (currentQ < quizLength) {
      setCurrentQ(currentQ + 1);
    }
    handleSelected(parseInt(e.target.value), false);
  };
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

          <div className="qCon">
            <h1>{quiz[currentQ].q}</h1>
          </div>
          <div className="options w-full">
            <div className="optionsRow1 flex justify-evenly items-center">
              <div
                className={`radioBtnCon relative flex justify-center items-center a${quiz[currentQ].qNo}`}
                id={`a${quiz[currentQ].qNo}`}
              >
                <label>{quiz[currentQ].a}</label>
                <input
                  className="absolute"
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
                <label>{quiz[currentQ].b}</label>
                <input
                  className="absolute"
                  type="radio"
                  value="b"
                  name={quiz[currentQ].qNo}
                  onClick={(e) => handleSelection(e)}
                  required
                />
              </div>
            </div>
            <div className="optionsRow2 flex justify-evenly items-center">
              <div
                className={`radioBtnCon relative flex justify-center items-center c${quiz[currentQ].qNo}`}
                id={`c${quiz[currentQ].qNo}`}
              >
                <label>{quiz[currentQ].c}</label>
                <input
                  className="absolute"
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
                <label>{quiz[currentQ].d}</label>
                <input
                  className="absolute"
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
