import React from "react";
import { useStateContext } from "../../context/StateContext";
import "./Leaderboard.scss";

export default function Leaderboard() {
  const { leaderboard, setDisplayLeaderboard } = useStateContext();
  const handleLeaderboard = () => {
    document.getElementById("leaderboardCon").classList.toggle("fadeOut");
    setTimeout(() => {
      setDisplayLeaderboard(false);
    }, 400);
  };
  return (
    <div
      className="leaderboardCon flex justify-center items-center flex-col w-full"
      id="leaderboardCon"
    >
      <div className="leaderboard flex justify-center items-center flex-col">
        <button
          className="flex justify-center items-center"
          onClick={() => handleLeaderboard()}
        >
          <span></span>
          <span></span>
        </button>
        <h1>Leaderboard</h1>
        <div className="flex justify-evenly items-center w-full text-center">
          <div className="username">
            <h1>Username</h1>
            {leaderboard &&
              leaderboard.map((u) => (
                <div key={Math.random()}>{u.username}</div>
              ))}
          </div>
          <div className="score">
            <h1>Score</h1>
            {leaderboard &&
              leaderboard.map((s) => (
                <div key={Math.random()}>
                  {s.userScore}/{s.totalScore}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
