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
    setQuiz,
    setDisplayQuiz,
    displayQuizCreate,
    setDisplayQuizCreate,
    setLeaderboard,
    loading,
    setLoading,
    loadingRef,
    setLeaderboardLoading,
    setMyQuizzes,
    setDisplayQuiz_2,
    quizComplete,
    quizCode,
    tempAnswer,
    setScore,
    setQuizComplete,
    setGivenQuizzes,
    setQuizViewCode,
    setDisplayGivenQuiz,
    setQuizGivenName,
    setUsername,
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
          handleLoading();
          if (doc.exists) {
            if (doc.data()) {
              if (doc.data().uid === currentUser.uid) {
                setUsername(doc.data().fullName.username);
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
  const handleLeaderboard = (quizCode) => {
    let com;
    setLeaderboardLoading(true);
    if (currentUser) {
      if (quizCode) {
        com = database.results
          .doc(quizCode)
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
                    setQuizGivenName(doc.data().quizResultContainer.quizName);
                  }
                }
              }
            }
          });
      }
    }
    return com;
  };
  //
  const handleQuizSearch = (e, quizCode, setFlag_1, setFlag_2) => {
    e.preventDefault();
    setLoading(true);
    let com = database.quizs
      .doc(quizCode)
      .get()
      .then((doc_1) => {
        if (doc_1.exists) {
          database.results
            .doc(quizCode)
            .get()
            .then((doc) => {
              let condition = false;
              doc.data().quizResultContainer.submissions.forEach((r) => {
                if (r.uid === currentUser.uid) {
                  condition = true;
                }
              });
              if (condition) {
                setFlag_1(false);
                setFlag_2(true);
                handleLoading();
              } else {
                setQuiz(doc_1.data().quizContainer.quiz[0].quiz);
                setFlag_1(false);
                setDisplayQuiz_2(true);
                handleLoading();
              }
            });
        } else {
          setFlag_1(true);
          setFlag_2(false);
          handleLoading();
        }
      });
    return com;
  };
  //
  const handelQuizCreateDisplay = () => {
    if (displayQuizCreate) {
      setDisplayQuizCreate(false);
    } else {
      setDisplayQuizCreate(true);
    }
  };
  //
  const handleMyQuizzes = () => {
    let com;
    if (currentUser) {
      com = database.users
        .doc(currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            if (doc.data().quizzes) {
              setMyQuizzes(doc.data().quizzes);
            }
          }
        });
    }
    return com;
  };
  //
  const handleDeleteQuiz = async (quizCode) => {
    let com;
    if (currentUser) {
      setLoading(true);
      com = await database.users
        .doc(currentUser.uid)
        .get()
        .then(async (doc) => {
          if (doc.exists) {
            if (doc.data().quizzes) {
              let arr = doc.data().quizzes;
              for (let i = 0; i < arr.length; i++) {
                if (quizCode === arr[i].quizCode) {
                  arr.splice(i, i + 1);
                  await database.users
                    .doc(currentUser.uid)
                    .update({
                      quizzes: arr,
                    })
                    .then(() => {
                      database.quizs
                        .doc(quizCode.toString())
                        .delete()
                        .then(() => {
                          database.answers
                            .doc(quizCode.toString())
                            .delete()
                            .then(() => {
                              database.results
                                .doc(quizCode.toString())
                                .delete()
                                .then(() => {
                                  setMyQuizzes(arr);
                                  handleLoading();
                                });
                            });
                        });
                    });
                }
              }
            }
          }
        });
    }
    return com;
  };
  //
  const handleScore = (data, user) => {
    let count = 0;
    console.log(data);
    data.quizAnswerContainer.quizAnswer[0].quizAnswer.forEach((q) => {
      if (q.answer === tempAnswer[q.qNo - 1].answer) {
        count++;
        console.log(count);
      }
    });
    setScore(count);
    handleLoading();
    setQuizComplete(true);
    let username = user.fullName.username;
    let com;
    if (currentUser) {
      com = database.results
        .doc(quizCode)
        .get()
        .then((doc) => {
          let arr = doc.data().quizResultContainer.submissions;
          arr.push({
            uid: currentUser.uid,
            quizName: data.quizAnswerContainer.quizAnswer[0].quizName,
            userScore: count,
            totalScore: tempAnswer.length,
            username: username,
          });
          if (doc.data().quizResultContainer.submissions[0] !== undefined) {
            let condition = false;
            doc.data().quizResultContainer.submissions.forEach((r) => {
              if (r.uid === currentUser.uid) {
                condition = true;
              }
            });
            if (condition === false) {
              database.results
                .doc(quizCode)
                .update({
                  quizResultContainer: {
                    quizName: data.quizAnswerContainer.quizAnswer[0].quizName,
                    submissions: arr,
                  },
                })
                .then(() => {
                  let temp = database.users
                    .doc(currentUser.uid)
                    .get()
                    .then((doc) => {
                      return doc.data().givenQuizzes;
                    });
                  temp.then((data_1) => {
                    let arr = [];
                    if (data !== undefined) {
                      arr = data_1;
                    }
                    console.log(data);
                    let t = {
                      quizName: data.quizAnswerContainer.quizAnswer[0].quizName,
                      quizCode: quizCode,
                    };
                    arr.push(t);
                    database.users.doc(currentUser.uid).update({
                      givenQuizzes: arr,
                    });
                  });
                });
            }
          } else {
            let condition = false;
            doc.data().quizResultContainer.submissions.forEach((r) => {
              if (r.uid === currentUser.uid) {
                condition = true;
              }
            });
            if (condition === false) {
              database.results
                .doc(quizCode)
                .update({
                  quizResultContainer: {
                    quizName: data.quizAnswerContainer.quizAnswer[0].quizName,
                    submissions: arr,
                  },
                })
                .then(() => {
                  let temp = database.users
                    .doc(currentUser.uid)
                    .get()
                    .then((doc) => {
                      return doc.data().givenQuizzes;
                    });
                  temp.then((data_1) => {
                    let arr = [];
                    if (data_1 !== undefined) {
                      arr = data_1;
                    }
                    let t = {
                      quizName: data.quizAnswerContainer.quizAnswer[0].quizName,
                      quizCode: quizCode,
                    };
                    arr.push(t);
                    database.users.doc(currentUser.uid).update({
                      givenQuizzes: arr,
                    });
                  });
                });
            }
          }
          count = 0;
        });
    }
    return com;
  };
  //
  const handleSubmission = () => {
    let com;
    console.log(quizComplete);
    if (currentUser) {
      com = database.answers
        .doc(quizCode)
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log(doc.data().quizAnswerContainer.quizAnswer[0].quizName);
            database.users
              .doc(currentUser.uid)
              .get()
              .then((user) => {
                if (user.exists) {
                  if (user.data()) {
                    handleScore(doc.data(), user.data());
                  }
                }
              });
          }
        });
    }
    return com;
  };
  //
  const handleGivenQuizzes = () => {
    let com;
    if (currentUser) {
      com = database.users
        .doc(currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setGivenQuizzes(doc.data().givenQuizzes);
          }
        });
    }
    return com;
  };
  //
  const handleViewGivenQuiz = (quizCode) => {
    setQuizViewCode(quizCode);
    setDisplayGivenQuiz(true);
    handleLeaderboard(quizCode);
  };
  //
  const handleDeleteGivenQuiz = (quizCode) => {
    let com;
    if (currentUser) {
      setLoading(true);
      com = database.users
        .doc(currentUser.uid)
        .get()
        .then((doc) => {
          let arr = doc.data().givenQuizzes;
          for (let i = 0; i < arr.length; i++) {
            if (arr[i].quizCode === quizCode) {
              arr.splice(i, 1);
              database.users
                .doc(currentUser.uid)
                .update({
                  givenQuizzes: arr,
                })
                .then(() => {
                  handleLoading();
                });
              break;
            }
          }
        });
    }
    return com;
  };
  //
  const handleLoading = () => {
    loadingRef.current.classList.toggle("fadeOut");
    setTimeout(() => {
      setLoading(false);
    }, 400);
  };
  return {
    handleBackSmooth,
    handleBack,
    handleDirectBack,
    handleProfileExist,
    handleQuizGiven,
    handleLeaderboard,
    handleQuizSearch,
    handelQuizCreateDisplay,
    handleMyQuizzes,
    handleDeleteQuiz,
    handleSubmission,
    handleGivenQuizzes,
    handleViewGivenQuiz,
    handleDeleteGivenQuiz,
  };
}
