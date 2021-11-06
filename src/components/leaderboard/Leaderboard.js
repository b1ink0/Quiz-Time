import React from "react";
import { useStateContext } from "../../context/StateContext";
import "./Leaderboard.scss";
import rank_1 from "./media/rank_1.svg";
import rank_2 from "./media/rank_2.svg";
import rank_3 from "./media/rank_3.svg";

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
        <table className="flex justify-between items-center w-full text-center flex-col">
          <tbody className="flex justify-between items-center w-full text-center flex-col">
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Score</th>
            </tr>
            {leaderboard &&
              leaderboard.map((l) => (
                <tr key={Math.random()}>
                  <td>
                    {l.rank === 1 ? (
                      <img alt="rank_1" src={rank_1} />
                    ) : l.rank === 2 ? (
                      <img alt="rank_2" src={rank_2} />
                    ) : l.rank === 3 ? (
                      <img alt="rank_2" src={rank_3} />
                    ) : (
                      l.rank
                    )}
                  </td>
                  <td>{l.username}</td>
                  <td>
                    {l.userScore}/{l.totalScore}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
