import React, { useEffect } from "react";

export default function QuizCreateFirstSection({
  setCreateQuizName,
  quizNameInputRef,
  createQuizName,
  handleFirstSectionDisplay,
}) {
  useEffect(() => {
    quizNameInputRef.current.focus();
  }, []);
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
          maxLength="20"
          ref={quizNameInputRef}
          value={createQuizName}
          onChange={(e) => setCreateQuizName(e.target.value)}
          required
        />
        <button
          onClick={() => handleFirstSectionDisplay()}
          disabled={createQuizName === "" ? true : false}
          className={createQuizName === "" ? "nextBtn" : undefined}
        >
          Next
        </button>
      </div>
    </>
  );
}
