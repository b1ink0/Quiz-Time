import React from "react";
import { useStateContext } from "../../context/StateContext";
import "./Leaderboard.scss";
import rank_1 from "./media/rank_1.svg";
import rank_2 from "./media/rank_2.svg";
import rank_3 from "./media/rank_3.svg";
import edit from "../media/edit.svg";

export default function Leaderboard({ setDisplayDelete }) {
  const { leaderboard, quizGivenName } = useStateContext();
  const handleClick = () => {
    setDisplayDelete(true);
  };
  return (
    <div
      className="leaderboardCon flex justify-center items-center flex-col w-full"
      id="leaderboardCon"
    >
      <div className="leaderboard flex justify-center items-center flex-col w-full relative">
        <h1 className="w-10/12 text-center pb-2 mb-2">{quizGivenName}</h1>
        <h1>Leaderboard</h1>
        <button
          type="button"
          className="absolute flex justify-center items-center"
          onClick={() => handleClick()}
        >
          <img src={edit} alt="edit" className="pointer-events-none" />
        </button>
        <table className="flex justify-between items-center w-full text-center flex-col">
          <tbody className="flex justify-between items-center w-full text-center flex-col">
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Score</th>
              <th>Time Taken</th>
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
                  <td>{l.timeTaken}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
