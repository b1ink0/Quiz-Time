import { database } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { useStateContext } from "../context/StateContext";

export default function useFunction() {
  const {
    setAlert,
    setUpdate,
    update,
    quizGiven,
    setProfileExist,
    setQuizShareAnswerName,
    setQuizShareName,
    setQuizShareResultName,
    quizShareName,
    setQuiz,
    setQuizName,
    setQuizExist,
    setDisplayQuiz,
    displayLeaderboard,
    setDisplayLeaderboard,
    quizShareResultName,
    quizShareAnswerName,
    setLeaderboard,
    setLoading,
    setLeaderboardLoading,
    setUserScore,
    setTotalScore,
    setQuizGiven,
  } = useStateContext();
  const { currentUser } = useAuth();
  //
  const handleProfileExist = () => {
    let com;
    if (currentUser) {
      com = database.users
        .doc(currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            if (doc.data()) {
              if (doc.data().uid === currentUser.uid) {
              }
            }
            setProfileExist(true);
            return;
          } else {
            setProfileExist(false);
          }
        });
    }
    return com;
  };
  //
  const handleQuizShare = () => {
    let com;
    if (currentUser) {
      com = database.quizShare
        .doc("quizShare")
        .get()
        .then((doc) => {
          if (doc.exists) {
            if (doc.data()) {
              setQuizShareName(doc.data().quizShareContainer.quizName);
              setQuizShareAnswerName(
                doc.data().quizShareContainer.quizAnswerName
              );
              setQuizShareResultName(
                doc.data().quizShareContainer.quizResultName
              );
            }
            return;
          } else {
          }
        });
    }
    return com;
  };
  //
  const handleSetQuiz = () => {
    let com;
    if (quizShareName !== "") {
      if (currentUser) {
        com = database.quizs
          .doc(quizShareName)
          .get()
          .then((doc) => {
            if (doc.exists) {
              if (doc.data()) {
                setQuiz(doc.data().quizContainer.quiz);
                setQuizName(doc.data().quizContainer.quizName);
              }
              return;
            } else {
              setQuizExist(false);
            }
          });
      }
    }
    return com;
  };
  //
  const handleSetQuizData = () => {
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
    return com;
  };
  const handleBackSmooth = () => {
    document.querySelector(".preBack").classList.toggle("fadeOut");
    document.querySelector(".preBackCon").classList.toggle("fadeOut2");
    setTimeout(() => {
      setAlert(false);
    }, 410);
  };
  //
  const handleBack = () => {
    document.querySelector(".back").classList.toggle("fadeOut2");
    handleBackSmooth();
    setTimeout(() => {
      setUpdate(!update);
    }, 410);
  };
  //
  const handleDirectBack = () => {
    if (!quizGiven) {
      setAlert(true);
    } else {
      handleBack();
    }
  };
  //
  const handleQuizGiven = () => {
    if (quizGiven === false) {
      setDisplayQuiz(false);
    }
  };
  //
  const handleLeaderboard = () => {
    let com;
    if (!displayLeaderboard) {
      setLeaderboardLoading(true);
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
                      if (!displayLeaderboard) {
                        setLeaderboardLoading(false);
                        setDisplayLeaderboard(true);
                      }
                    }
                  }
                }
                return com;
              }
            });
        }
      }
    } else if (displayLeaderboard) {
      document.getElementById("leaderboardCon").classList.toggle("fadeOut");
      setTimeout(() => {
        setDisplayLeaderboard(false);
      }, 400);
    }
  };
  //
  return {
    handleBackSmooth,
    handleBack,
    handleDirectBack,
    handleProfileExist,
    handleQuizShare,
    handleSetQuiz,
    handleQuizGiven,
    handleLeaderboard,
    handleSetQuizData,
  };
}
