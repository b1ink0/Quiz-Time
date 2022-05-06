import React, { useState } from "react";
import { useStateContext } from "../../context/StateContext";
import "./Leaderboard.scss";
import rank_1 from "./media/rank_1.svg";
import rank_2 from "./media/rank_2.svg";
import rank_3 from "./media/rank_3.svg";
import edit from "../media/edit.svg";
import useFunction from "../../hooks/useFunction";

export default function Leaderboard({ setDisplayDelete }) {
  const { leaderboard, quizGivenName } = useStateContext();
  const { handleCopy } = useFunction();
  const [readMore, setReadMore] = useState(false);
  const [copyEmail, setCopyEmail] = useState(false);
  const [emailNumber, setEmailNumber] = useState(1);
  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  const handleClick = () => {
    setDisplayDelete(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let s = "";
    for (let i = 0; i < emailNumber; i++) {
      if (s === "") {
        s = leaderboard[i].email;
      } else {
        s = s + ", " + leaderboard[i].email;
      }
    }
    handleCopy(s);
    setEmailNumber(1);
    setCopyEmail(false);
  };
  return (
    <>
      <div
        className="leaderboardCon flex justify-center items-center flex-col w-full"
        id="leaderboardCon"
      >
        <div className="leaderboard flex justify-center items-center flex-col w-full relative">
          <h1 className="w-10/12 text-center pb-2 mb-2">{quizGivenName}</h1>
          <h1>Leaderboard</h1>
          <div className="flex justify-center items-center">
            <button
              className="readMoreBtn"
              type="button"
              onClick={handleReadMore}
            >
              {readMore ? "Less Details" : "More Details"}
            </button>
            <button
              className="copyEmailBtn"
              type="button"
              onClick={() => setCopyEmail(!copyEmail)}
            >
              Copy Emails
            </button>
          </div>
          <button
            type="button"
            className="editBtn absolute flex justify-center items-center"
            onClick={() => handleClick()}
          >
            <img src={edit} alt="edit" className="pointer-events-none" />
          </button>
          {copyEmail && (
            <div className="copyEmail mt-3 mb-2 w-11/12 lg:w-5/6 flex justify-center items-center">
              <form
                className="w-full flex flex-col justify-center items-center"
                onSubmit={(e) => handleSubmit(e)}
              >
                <label>Enter Number Of Emails:</label>
                <input
                  type="number"
                  className="text-center"
                  value={emailNumber}
                  onChange={(e) => setEmailNumber(e.target.value)}
                  min="1"
                  max={leaderboard.length}
                  required
                />
                <button type="submit">Copy</button>
              </form>
            </div>
          )}
          {!readMore ? (
            <table className="w-11/12 lg:w-5/6 mt-3 mb-3 text-xs lg:text-xl">
              <tbody className="">
                <tr>
                  <th>Rank</th>
                  <th>Username</th>
                  <th>Score</th>
                  <th>Time Taken</th>
                </tr>
                {leaderboard &&
                  leaderboard.map((l) => (
                    <tr key={Math.random()}>
                      <td className="relative">
                        <div className="w-full h-full flex justify-center items-center">
                          {l.rank === 1 ? (
                            <img alt="rank_1" src={rank_1} />
                          ) : l.rank === 2 ? (
                            <img alt="rank_2" src={rank_2} />
                          ) : l.rank === 3 ? (
                            <img alt="rank_2" src={rank_3} />
                          ) : (
                            l.rank
                          )}
                        </div>
                      </td>
                      <td
                        title={
                          l.firstName && l.lastName
                            ? `${l.firstName} ${l.lastName}`
                            : ""
                        }
                      >
                        {l.username}
                      </td>
                      <td>
                        {l.userScore}/{l.totalScore}
                      </td>
                      <td>{l.timeTaken}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <div className="w-full flex flex-col justify-center items-center">
              <table className="w-11/12 lg:w-5/6 mt-3 mb-3 text-xs lg:text-xl">
                <tbody>
                  <tr>
                    <th>Rank</th>
                    <th>Details</th>
                  </tr>
                  {leaderboard &&
                    leaderboard.map((l) => (
                      <tr key={Math.random()}>
                        <td>
                          <div className="w-full h-full flex justify-center items-center">
                            {l.rank === 1 ? (
                              <img alt="rank_1" src={rank_1} />
                            ) : l.rank === 2 ? (
                              <img alt="rank_2" src={rank_2} />
                            ) : l.rank === 3 ? (
                              <img alt="rank_2" src={rank_3} />
                            ) : (
                              l.rank
                            )}
                          </div>
                        </td>
                        <td
                          className="readMoreTd p-2 cursor-pointer"
                          onClick={() => handleCopy(l.email)}
                        >
                          <h3>Username : {l.username}</h3>
                          <h3>Full Name: {l.firstName + " " + l.lastName}</h3>
                          <h4>Email : {l.email}</h4>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
