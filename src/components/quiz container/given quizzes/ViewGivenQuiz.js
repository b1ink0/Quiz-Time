import React, { useState } from "react";
import Leaderboard from "../../leaderboard/Leaderboard";
import DeleteGivenQuiz from "./DeleteGivenQuiz";
import "./ViewGivenQuiz.scss";

export default function ViewGivenQuiz() {
  const [displayDelete, setDisplayDelete] = useState(false);
  return (
    <div className="viewGivenQuiz w-full flex justify-center items-center flex-col">
      {displayDelete && <DeleteGivenQuiz setDisplayDelete={setDisplayDelete} />}
      <Leaderboard setDisplayDelete={setDisplayDelete} />
    </div>
  );
}
