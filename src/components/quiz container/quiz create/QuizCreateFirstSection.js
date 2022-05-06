import React, { useEffect } from "react";

export default function QuizCreateFirstSection({
  startTime,
  endTime,
  setStartTime,
  setEndTime,
  setCreateQuizName,
  quizNameInputRef,
  createQuizName,
  handleFirstSectionDisplay,
}) {
  useEffect(() => {
    quizNameInputRef.current.focus();
  }, []);

  const handleFilled = () => {
    if (createQuizName === "" || startTime === "" || endTime === "") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <h1 className="w-full pb-3">Create Quiz</h1>
      <div className="quizNameInput w-full flex justify-center items-center flex-col">
        <label className="mt-3 mb-3">Enter Quiz Name</label>
        <input
          className="w-5/6"
          id="quizNameInput"
          type="text"
          minLength="1"
          maxLength="30"
          ref={quizNameInputRef}
          value={createQuizName}
          onChange={(e) => setCreateQuizName(e.target.value)}
          required
        />
        <label className="mt-3 mb-3">Quiz Starting Time</label>
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
        <label className="mt-3 mb-3">Quiz Ending Time</label>
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />

        <button
          onClick={() => handleFirstSectionDisplay()}
          disabled={handleFilled() ? true : false}
          className={createQuizName === "" ? "nextBtn" : undefined}
        >
          Next
        </button>
      </div>
    </>
  );
}
