import React, { useState, useEffect } from "react";
import { database } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import "./Dashboard.scss";
import Quiz from "../quizs/Quiz";
import Leaderboard from "../quizs/Leaderboard";
import Loading from "../sub-components/Loading";
import ProfileInput from "../profile/ProfileInput";
import Navbar from "../navbar/Navbar";
import Alert from "../sub-components/Alert";
import Back from "../sub-components/Back";
import useFunction from "../../hooks/useFunction";

export default function Dashboard() {
  const [navBurger, setNavBurger] = useState(true);
  const [loading, setLoading] = useState(false);
  const { currentUser, logOut } = useAuth("");
  const { handleProfileExist, handleQuizShare, handleSetQuiz } = useFunction();
  const {
    profileExist,
    alert,
    setQuiz,
    setQuizExist,
    quizExist,
    setQuizName,
    quizName,
    displayQuiz,
    setDisplayQuiz,
    displayLeaderboard,
    setDisplayLeaderboard,
    quizShareName,
    quizShareAnswerName,
    quizShareResultName,
    quizGiven,
    setQuizGiven,
    userScore,
    setUserScore,
    totalScore,
    setTotalScore,
    setLeaderboard,
    update,
    setUpdate,
  } = useStateContext("");

  useEffect(() => {
    setLoading(true);
    handleProfileExist();
  }, []);

  useEffect(() => {
    handleQuizShare();
  }, [profileExist]);

  useEffect(() => {
    handleSetQuiz();
  }, [quizShareAnswerName]);

  useEffect(() => {
    let com;
    if (quizShareResultName !== "") {
      if (currentUser) {
        com = database.results
          .doc(quizShareResultName)
          .get()
          .then((doc) => {
            if (doc.exists) {
              if (doc.data()) {
                if (
                  doc.data().quizResultContainer.submissions[0] !== undefined
                ) {
                  let condition = false;
                  doc.data().quizResultContainer.submissions.forEach((r) => {
                    if (r.uid === currentUser.uid) {
                      condition = true;
                      setUserScore(r.userScore);
                      setTotalScore(r.totalScore);
                    }
                  });
                  setLoading(false);
                  if (condition === false) {
                    setQuizExist(true);
                    setQuizGiven(false);
                  } else {
                    setQuizExist(true);
                    setQuizGiven(true);
                  }
                } else {
                  setQuizExist(true);
                  setQuizGiven(false);
                }
              }
              return;
            } else {
            }
          });
      }
    }
    if (currentUser) {
      if (quizShareAnswerName) {
        com = database.results
          .doc(quizShareResultName)
          .get()
          .then((doc) => {
            if (doc.exists) {
              if (doc.data()) {
                let array = [];
                let arrayLength =
                  doc.data().quizResultContainer.submissions.length;
                doc.data().quizResultContainer.submissions.forEach((s) => {
                  let temp = {
                    username: s.username,
                    userScore: s.userScore,
                    totalScore: s.totalScore,
                  };
                  array.push(temp);
                });
                if (arrayLength === array.length) {
                  if (array[0] !== undefined) {
                    for (let i = 0; i < arrayLength; i++) {
                      for (let j = 0; j < arrayLength - i - 1; j++) {
                        if (array[j].userScore < array[j + 1].userScore) {
                          let temp = array[j];
                          array[j] = array[j + 1];
                          array[j + 1] = temp;
                        }
                      }
                    }
                    let rank = 1;
                    let tempScore = array[0].userScore;
                    for (let i = 0; i < arrayLength; i++) {
                      if (array[i].userScore === tempScore) {
                        array[i] = {
                          ...array[i],
                          rank: rank,
                        };
                      } else {
                        rank++;
                        tempScore = array[i].userScore;
                        array[i] = {
                          ...array[i],
                          rank: rank,
                        };
                      }
                    }
                    setLeaderboard(array);
                  }
                }
              }
              return;
            } else {
            }
          });
      }
    }
    return com;
  }, [quizShareResultName]);
  useEffect(() => {}, []);

  const handleQuizGiven = () => {
    if (quizGiven === false) {
      setDisplayQuiz(false);
    }
  };
  useEffect(() => {
    setDisplayQuiz(true);
  }, [update, setUpdate]);
  const handleLeaderboard = () => {
    if (displayLeaderboard) {
      document.getElementById("leaderboardCon").classList.toggle("fadeOut");
      setTimeout(() => {
        setDisplayLeaderboard(false);
      }, 400);
    } else if (!displayLeaderboard) {
      setDisplayLeaderboard(true);
    }
  };

  return (
    <>
      <div className="logoCon flex justify-center items-center">
        <h1>Quiz Time</h1>
      </div>
      {!displayQuiz && <Back />}
      {alert && <Alert />}
      {navBurger && <Navbar />}
      {!profileExist ? (
        <ProfileInput />
      ) : (
        displayQuiz &&
        (quizExist ? (
          <>
            <div className="quizPrevCon flex justify-center items-center w-full flex-col mt-5">
              <div className="quizCon flex justify-center items-center flex-col text-center">
                <h1 className="w-full text-center">{quizName}</h1>
                {quizGiven ? (
                  <div className="flex justify-center items-center flex-col w-full text-center">
                    <p className="w-full text-center">
                      You have already submited the quiz!
                    </p>
                    <p
                      className="text-center cursor-pointer"
                      onClick={() => handleLeaderboard()}
                    >
                      Leaderboard
                    </p>
                    <h1 className="w-full text-center">
                      Your Score: {userScore}/{totalScore}
                    </h1>
                  </div>
                ) : (
                  <>
                    <p
                      className="text-center cursor-pointer"
                      onClick={() => handleQuizGiven()}
                    >
                      Click To Start The Quiz
                    </p>
                    <p
                      className="text-center cursor-pointer"
                      onClick={() => handleLeaderboard()}
                    >
                      Leaderboard
                    </p>
                  </>
                )}
              </div>
            </div>
            {displayLeaderboard && <Leaderboard />}
          </>
        ) : (
          <h1 className="w-full text-center">"Quiz are not avilable yet!"</h1>
        ))
      )}
      {!displayQuiz && <Quiz />}
      {loading && !quizExist && profileExist && <Loading />}
    </>
  );
}
