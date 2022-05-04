import React, { useEffect, useRef, useState } from "react";
import { useStateContext } from "../../../context/StateContext";
import SaveQuiz from "../save quiz/SaveQuiz";
import "./QuizCreate.scss";
import editSvg from "../../media/edit.svg";
import QuizCreateFirstSection from "./QuizCreateFirstSection";
import QuizCreateImageUpload from "./QuizCreateImageUpload";
import QuizCreateAudioUpload from "./QuizCreateAudioUpload";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function QuizCreate() {
  const { displaySaveQuiz, setDisplaySaveQuiz } = useStateContext();
  const [displayFirstSection, setDisplayFirstSection] = useState(true);
  const [displaySecondSection, setDisplaySecondSection] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [questionCount, setQuestionCount] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [createQuizName, setCreateQuizName] = useState("");
  const [createQuizQuestion, setCreateQuizQuestion] = useState("");
  const [createOptionA, setCreateOptionA] = useState("");
  const [createOptionB, setCreateOptionB] = useState("");
  const [createOptionC, setCreateOptionC] = useState("");
  const [createOptionD, setCreateOptionD] = useState("");
  const [createAnswer, setCreateAnswer] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [playing, setPlaying] = useState(false);
  const [tempQuiz, setTempQuiz] = useState([]);
  const [tempAnswer, setTempAnswer] = useState([]);
  const quizNameInputRef = useRef();

  useEffect(() => {
    if (document.getElementById("quizNameInput")) {
      document.getElementById("quizNameInput").focus();
    }
  }, []);
  useEffect(() => {
    if (document.getElementById("questionInputId")) {
      document.getElementById("questionInputId").focus();
    }
  }, [displaySecondSection]);

  useEffect(() => {
    console.log(imageUrl);
  }, [imageUrl]);
  const handleFirstSectionDisplay = () => {
    setDisplayFirstSection(false);
    setDisplaySecondSection(true);
  };
  const handleTextAreaResize = (e) => {
    const h = document.getElementById(e.target.id);
    h.style.height = "auto";
    h.style.height = h.scrollHeight + "px";
  };

  const handleQuestionInput = (e) => {
    setCreateQuizQuestion(e.target.value);
    handleTextAreaResize(e);
  };

  const handleAnswerSelection = (e) => {
    setCreateAnswer(e.target.value);
    let arr = ["a", "b", "c", "d"];
    arr.forEach((a) => {
      let ai = document.getElementById(a).classList;
      if (e.target.value === a) {
        if (ai[1] === undefined) {
          ai.toggle("activeInput");
        }
      } else {
        if (ai[1] === "activeInput") {
          ai.toggle("activeInput");
        }
      }
    });
  };

  const handleSave = () => {
    if (tempQuiz[0] !== undefined) {
      setDisplaySaveQuiz(true);
    }
  };

  const handleRemove = () => {
    if (currentQuestion === 1 && questionCount === 2) {
      handleFirst();
      console.log("1");
    } else if (currentQuestion === 1 && questionCount > 2) {
      console.log("2");

      let currentQ = tempQuiz;
      let currentA = tempAnswer;
      currentQ.shift();
      currentA.shift();
      console.log(currentQ, currentA);
      setTempQuiz(currentQ);
      setTempAnswer(currentA);
      setTimeout(() => {
        setQuestionCount(questionCount - 1);
      }, 100);
      if (questionCount === 3) {
        setCreateQuizQuestion(currentQ[0].q);
        setImageUrl(currentQ[0].imageUrl);
        setAudioUrl(currentQ[0].audioUrl);
        setCreateOptionA(currentQ[0].a);
        setCreateOptionB(currentQ[0].b);
        setCreateOptionC(currentQ[0].c);
        setCreateOptionD(currentQ[0].d);
        setCreateAnswer(currentA[0].answer);
        let arr = ["a", "b", "c", "d"];
        arr.forEach((o) => {
          let ai = document.getElementById(o).classList;
          let input = document.getElementById(`${currentA[0].answer}i`);
          if (o === currentA[0].answer) {
            if (ai[1] === undefined) {
              input.checked = true;
              ai.toggle("activeInput");
            }
          } else {
            if (ai[1] === "activeInput") {
              ai.toggle("activeInput");
            }
          }
        });
      }
      // handleNextQ();
    } else {
      console.log("3");
      setTempQuiz(tempQuiz.filter((t) => t !== tempQuiz[currentQuestion - 1]));
      setTempAnswer(
        tempAnswer.filter((t) => t !== tempAnswer[currentQuestion - 1])
      );
      handlePrevQ();
      setQuestionCount(questionCount - 1);
    }
  };
  const handleFirst = () => {
    let currentQ = tempQuiz;
    let currentA = tempAnswer;
    currentQ.pop();
    currentA.pop();
    console.log(currentQ, currentA);
    setTempQuiz(currentQ);
    setTempAnswer(currentA);
    setTimeout(() => {
      setQuestionCount(1);
    }, 100);
    setCreateQuizQuestion("");
    setImageUrl("");
    setAudioUrl("");
    setCreateOptionA("");
    setCreateOptionB("");
    setCreateOptionC("");
    setCreateOptionD("");
    setCreateAnswer("");
    let arr = ["a", "b", "c", "d"];
    arr.forEach((a) => {
      let ai = document.getElementById(a).classList;
      if (ai[1] === "activeInput") {
        ai.toggle("activeInput");
      }
    });
    document
      .querySelectorAll(
        ".answerSelectCon .answerSelect input[type=radio][name=answer]:checked"
      )
      .forEach((input) => {
        input.checked = false;
      });
  };
  const handleUpdate = () => {
    let currentQ = tempQuiz;
    let currentA = tempAnswer;
    currentQ[currentQuestion - 1] = {
      q: createQuizQuestion,
      a: createOptionA,
      b: createOptionB,
      c: createOptionC,
      d: createOptionD,
      imageUrl: imageUrl,
      audioUrl: audioUrl,
    };
    currentA[currentQuestion - 1] = {
      answer: createAnswer,
    };
    setTempQuiz(currentQ);
    setTempAnswer(currentA);
  };

  const handlePrevQ = () => {
    if (currentQuestion > 1) {
      let currentQ = tempQuiz[currentQuestion - 2];
      let currentA = tempAnswer[currentQuestion - 2];
      setCreateQuizQuestion(currentQ.q);
      setImageUrl(currentQ.imageUrl);
      setAudioUrl(currentQ.audioUrl);
      setCreateOptionA(currentQ.a);
      setCreateOptionB(currentQ.b);
      setCreateOptionC(currentQ.c);
      setCreateOptionD(currentQ.d);
      setCreateAnswer(currentA.answer);
      let arr = ["a", "b", "c", "d"];
      arr.forEach((o) => {
        let ai = document.getElementById(o).classList;
        let input = document.getElementById(`${currentA.answer}i`);
        if (o === currentA.answer) {
          if (ai[1] === undefined) {
            input.checked = true;
            ai.toggle("activeInput");
          }
        } else {
          if (ai[1] === "activeInput") {
            ai.toggle("activeInput");
          }
        }
      });
    }
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleNextQ = () => {
    if (currentQuestion !== questionCount) {
      setCurrentQuestion(currentQuestion + 1);
      if (currentQuestion !== questionCount - 1) {
        let currentQ = tempQuiz[currentQuestion];
        let currentA = tempAnswer[currentQuestion];
        setCreateQuizQuestion(currentQ.q);
        setImageUrl(currentQ.imageUrl);
        setAudioUrl(currentQ.audioUrl);
        setCreateOptionA(currentQ.a);
        setCreateOptionB(currentQ.b);
        setCreateOptionC(currentQ.c);
        setCreateOptionD(currentQ.d);
        setCreateAnswer(currentA.answer);
        let arr = ["a", "b", "c", "d"];
        arr.forEach((o) => {
          let ai = document.getElementById(o).classList;
          let input = document.getElementById(`${currentA.answer}i`);
          if (o === currentA.answer) {
            if (ai[1] === undefined) {
              input.checked = true;
              ai.toggle("activeInput");
            }
          } else {
            if (ai[1] === "activeInput") {
              ai.toggle("activeInput");
            }
          }
        });
      } else {
        setCreateQuizQuestion("");
        setImageUrl("");
        setAudioUrl("");
        setCreateOptionA("");
        setCreateOptionB("");
        setCreateOptionC("");
        setCreateOptionD("");
        setCreateAnswer("");
        let arr = ["a", "b", "c", "d"];
        arr.forEach((a) => {
          let ai = document.getElementById(a).classList;
          if (ai[1] === "activeInput") {
            ai.toggle("activeInput");
          }
        });
        document
          .querySelectorAll(
            ".answerSelectCon .answerSelect input[type=radio][name=answer]:checked"
          )
          .forEach((input) => {
            input.checked = false;
          });
      }
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    let tempQ = tempQuiz;
    let tempA = tempAnswer;
    tempQ = [
      ...tempQ,
      {
        q: createQuizQuestion,
        a: createOptionA,
        b: createOptionB,
        c: createOptionC,
        d: createOptionD,
        imageUrl: imageUrl,
        audioUrl: audioUrl,
      },
    ];
    tempA = [
      ...tempA,
      {
        answer: createAnswer,
      },
    ];
    setTempQuiz(tempQ);
    setTempAnswer(tempA);
    setQuestionCount(questionCount + 1);
    setCurrentQuestion(currentQuestion + 1);
    setCreateQuizQuestion("");
    setImageUrl("");
    setAudioUrl("");
    setCreateOptionA("");
    setCreateOptionB("");
    setCreateOptionC("");
    setCreateOptionD("");
    setCreateAnswer("");
    let arr = ["a", "b", "c", "d"];
    arr.forEach((a) => {
      let ai = document.getElementById(a).classList;
      let input = document.getElementById(`${a}i`);
      if (input.checked === true) {
        input.checked = false;
      }
      if (ai[1] === "activeInput") {
        ai.toggle("activeInput");
      }
    });
    if (document.getElementById("questionInputId")) {
      document.getElementById("questionInputId").focus();
    }
  };
  const handleEditQuizName = () => {
    setDisplayFirstSection(true);
    setDisplaySecondSection(false);
  };
  return (
    <>
      {displaySaveQuiz && (
        <SaveQuiz
          quiz={tempQuiz}
          answer={tempAnswer}
          questionCount={questionCount}
          quizName={createQuizName}
          startTime={startTime}
          endTime={endTime}
        />
      )}
      <div className="createQuizCon w-full flex justify-center items-center mt-6 mb-8 text-center ">
        <form
          className="flex justify-center items-center flex-col text-center"
          onSubmit={(e) => handleAdd(e)}
        >
          {displayFirstSection && (
            <QuizCreateFirstSection
              startTime={startTime}
              endTime={endTime}
              setStartTime={setStartTime}
              setEndTime={setEndTime}
              quizNameInputRef={quizNameInputRef}
              createQuizName={createQuizName}
              setCreateQuizName={setCreateQuizName}
              handleFirstSectionDisplay={handleFirstSectionDisplay}
            />
          )}
          {displaySecondSection && (
            <>
              <button
                className="w-6 h-6 absolute top-4 right-4"
                type="button"
                onClick={() => handleEditQuizName()}
              >
                <img src={editSvg} alt="edit" />
              </button>
              <h1 className="w-3/5 break-words">{createQuizName}</h1>
              <div className="flex justify-center items-center flex-col w-full mt-3">
                <div className="textAreaCon flex justify-center items-center flex-col w-full">
                  <label>Question-{currentQuestion}</label>
                  <textarea
                    id="questionInputId"
                    className="w-5/6"
                    type="text"
                    required
                    value={createQuizQuestion}
                    minLength="1"
                    maxLength="500"
                    onChange={(e) => handleQuestionInput(e)}
                  />
                </div>
                <QuizCreateImageUpload setImageUrl={setImageUrl} />
                {imageUrl !== "" && (
                  <div className="questionImageContainer flex justify-center items-center flex-col w-full mt-4">
                    <div className="questionImageContainerSub flex justify-center items-center flex-col w-5/6">
                      <img
                        className="questionImage"
                        alt="placeholder"
                        src={imageUrl}
                      />
                    </div>
                  </div>
                )}
                <QuizCreateAudioUpload setAudioUrl={setAudioUrl} />
                {audioUrl !== "" && (
                  <div className="questionImageContainer flex justify-center items-center flex-col w-full mt-4">
                    <div className="questionImageContainerSub flex justify-center items-center flex-col w-5/6">
                      <AudioPlayer autoPlay="false" src={audioUrl} />
                    </div>
                  </div>
                )}
                <div className="flex justify-center items-center flex-col w-full lg:w-5/6 lg:flex-row">
                  <div className="flex justify-center items-center flex-col w-full lg:w-5/6 lg:mr-2">
                    <label>Option-A</label>
                    <input
                      className="w-5/6 lg:w-full"
                      type="text"
                      required
                      minLength="1"
                      maxLength="100"
                      value={createOptionA}
                      onChange={(e) => setCreateOptionA(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-center items-center flex-col w-full lg:w-5/6 lg:ml-2">
                    <label>Option-B</label>
                    <input
                      className="w-5/6 lg:w-full"
                      type="text"
                      required
                      minLength="1"
                      maxLength="100"
                      value={createOptionB}
                      onChange={(e) => setCreateOptionB(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center flex-col w-full lg:w-5/6 lg:flex-row">
                  <div className="flex justify-center items-center flex-col w-full lg:w-5/6 lg:mr-2">
                    <label>Option-C</label>
                    <input
                      className="w-5/6 lg:w-full"
                      type="text"
                      required
                      minLength="1"
                      maxLength="100"
                      value={createOptionC}
                      onChange={(e) => setCreateOptionC(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-center items-center flex-col w-full lg:w-5/6 lg:ml-2">
                    <label>Option-D</label>
                    <input
                      className="w-5/6 lg:w-full"
                      type="text"
                      required
                      minLength="1"
                      maxLength="100"
                      value={createOptionD}
                      onChange={(e) => setCreateOptionD(e.target.value)}
                    />
                  </div>
                </div>
                <div className="answerOption flex justify-center items-center flex-col w-full mt-3">
                  <h1>Answer</h1>
                  <div className="answerSelectCon flex justify-between items-center w-full mt-5">
                    <div className="answerSelect flex justify-center items-center flex-col relative cursor-pointer">
                      <label className="absolute" id="a">
                        A
                      </label>
                      <input
                        className="absolute cursor-pointer"
                        id="ai"
                        type="radio"
                        value="a"
                        required
                        name="answer"
                        onClick={(e) => handleAnswerSelection(e)}
                      />
                    </div>
                    <div className="answerSelect flex justify-center items-center flex-col relative cursor-pointer">
                      <label className="absolute" id="b">
                        B
                      </label>
                      <input
                        className="absolute cursor-pointer"
                        id="bi"
                        type="radio"
                        value="b"
                        required
                        name="answer"
                        onClick={(e) => handleAnswerSelection(e)}
                      />
                    </div>
                  </div>
                  <div className="answerSelect flex justify-between items-center w-full mt-5 ">
                    <div className="flex justify-center items-center flex-col relative cursor-pointer">
                      <label className="absolute" id="c">
                        C
                      </label>
                      <input
                        className="absolute cursor-pointer"
                        id="ci"
                        type="radio"
                        value="c"
                        required
                        name="answer"
                        onClick={(e) => handleAnswerSelection(e)}
                      />
                    </div>
                    <div className="answerSelect flex justify-center items-center flex-col relative cursor-pointer">
                      <label className="absolute" id="d">
                        D
                      </label>
                      <input
                        className="absolute cursor-pointer"
                        id="di"
                        type="radio"
                        value="d"
                        required
                        name="answer"
                        onClick={(e) => handleAnswerSelection(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="btnCon w-full mt-5">
                <div className="w-full pt-8">
                  <div className="btnControl w-full flex justify-center items-center">
                    {questionCount === currentQuestion ? (
                      <button type="submit">Add+</button>
                    ) : (
                      <>
                        <button
                          className="removeBtn flex justify-center items-center mr-3"
                          type="button"
                          onClick={() => handleRemove()}
                        >
                          Remove
                        </button>
                        <button
                          className="saveBtn flex justify-center items-center ml-3"
                          type="button"
                          onClick={() => handleUpdate()}
                        >
                          Update
                        </button>
                      </>
                    )}
                  </div>
                  <div className="controlBtnCon w-full flex justify-center items-center mt-8">
                    <>
                      <button
                        type="button"
                        className={
                          questionCount === 1 || currentQuestion === 1
                            ? "lastBtn cursor-not-allowed"
                            : undefined
                        }
                        disabled={
                          questionCount === 1 || currentQuestion === 1
                            ? true
                            : false
                        }
                        onClick={() =>
                          questionCount === 1 || currentQuestion === 1
                            ? {}
                            : handlePrevQ()
                        }
                      >
                        Q-{currentQuestion - 1}
                      </button>
                      <button
                        type="button"
                        className="middleBtn cursor-default"
                      >
                        {currentQuestion}
                      </button>
                      <button
                        type="button"
                        className={
                          questionCount === currentQuestion
                            ? "lastBtn cursor-not-allowed"
                            : undefined
                        }
                        disabled={
                          questionCount === currentQuestion ? true : false
                        }
                        onClick={() =>
                          questionCount === currentQuestion ? {} : handleNextQ()
                        }
                      >
                        Q-{currentQuestion + 1}
                      </button>
                    </>
                  </div>
                </div>
              </div>
              <div className="saveBtn w-full mt-1 pt-6 pb-5 flex justify-center items-center">
                <button
                  className="flex justify-center items-center"
                  type="button"
                  onClick={() => handleSave()}
                >
                  Save
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
}
