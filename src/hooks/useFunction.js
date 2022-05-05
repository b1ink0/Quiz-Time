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
                    firstName: s.firstName,
                    lastName: s.lastName,
                    userScore: s.userScore,
                    totalScore: s.totalScore,
                    timeTaken: handleTimeDifference(
                      s.startTime,
                      s.submissionTime
                    ),
                  };
                  array.push(temp);
                });

                array = array.sort(function (vote1, vote2) {
                  if (vote1.userScore > vote2.userScore) return -1;
                  if (vote1.userScore < vote2.userScore) return 1;
                  let t1 = handleTimeToMs(vote1.timeTaken);
                  let t2 = handleTimeToMs(vote2.timeTaken);
                  if (t1 > t2) return 1;
                  if (t1 < t2) return -1;
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
                    let tempScore = handleTimeToMs(array[0].timeTaken);
                    for (let i = 0; i < arrayLength; i++) {
                      if (handleTimeToMs(array[i].timeTaken) === tempScore) {
                        array[i] = {
                          ...array[i],
                          rank: rank,
                        };
                      } else {
                        rank++;
                        tempScore = handleTimeToMs(array[i].timeTaken);
                        array[i] = {
                          ...array[i],
                          rank: rank,
                        };
                      }
                    }
                    for (let i = 0; i < arrayLength; i++) {
                      let a = array[i].timeTaken.split(":");
                      let h = a[0];
                      let m = a[1];
                      let s = a[2];
                      if (h < 10) {
                        h = "0" + h;
                      }
                      if (m < 10) {
                        m = "0" + m;
                      }
                      if (s < 10) {
                        s = "0" + s;
                      }
                      array[i].timeTaken = h + ":" + m + ":" + s;
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
  const handleQuizSearch = (
    e,
    quizCode,
    setFlag_1,
    setFlag_2,
    setFlag_3,
    setFlag_4
  ) => {
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
                let st = doc_1.data().quizContainer.quiz[0].startTime;
                let et = doc_1.data().quizContainer.quiz[0].endTime;

                st = st + ":00";
                et = et + ":00";

                let cd = new Date();

                let sd = new Date(cd.getTime());
                sd.setHours(st.split(":")[0]);
                sd.setMinutes(st.split(":")[1]);
                sd.setSeconds(st.split(":")[2]);

                let ed = new Date(cd.getTime());
                ed.setHours(et.split(":")[0]);
                ed.setMinutes(et.split(":")[1]);
                ed.setSeconds(et.split(":")[2]);

                console.log(sd < cd && ed > cd);
                console.log(cd && ed > sd);
                console.log(cd && ed > cd);
                if (sd < cd && ed > cd) {
                  setQuiz(doc_1.data().quizContainer.quiz[0].quiz);
                  setFlag_1(false);
                  setFlag_2(false);
                  setFlag_3(false);
                  setFlag_4(false);
                  setDisplayQuiz_2(true);
                } else {
                  if (cd && ed > cd) {
                    if (cd && ed > sd) {
                      setFlag_1(false);
                      setFlag_2(false);
                      setFlag_4(false);
                      setFlag_3(true);
                    }
                  } else {
                    setFlag_1(false);
                    setFlag_2(false);
                    setFlag_3(false);
                    setFlag_4(true);
                  }
                }
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
  const handleTime = () => {
    let a;
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
    a = h + ":" + m + ":" + s;
    return a;
  };
  //
  const handleTimeInMS = (s) => {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return hrs + ":" + mins + ":" + secs;
  };
  //
  const handleTimeToMs = (s) => {
    let ms =
      Number(s.split(":")[0]) * 3600000 +
      Number(s.split(":")[1]) * 60000 +
      Number(s.split(":")[2]) * 1000;
    return ms;
  };
  //
  //
  const handleTimeDifference = (st, et) => {
    var time_start = new Date();
    var time_end = new Date();
    st = st + ":00";

    var value_start = st.split(":");
    var value_end = et.split(":");

    time_start.setHours(value_start[0], value_start[1], value_start[2], 0);
    time_end.setHours(value_end[0], value_end[1], value_end[2], 0);
    return handleTimeInMS(time_end - time_start); // millisecond
  };
  //
  const handleScore = (data, user) => {
    let count = 0;
    data.quizAnswerContainer.quizAnswer[0].quizAnswer.forEach((q) => {
      if (q.answer === tempAnswer[q.qNo - 1].answer) {
        count++;
      }
    });
    setScore(count);
    handleLoading();
    setQuizComplete(true);
    let username = user.fullName.username;
    let firstName = user.fullName.firstName;
    let lastName = user.fullName.lastName;
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
            firstName: firstName,
            lastName: lastName,
            submissionTime: handleTime(),
            startTime: data.quizAnswerContainer.quizAnswer[0].startTime,
            endTime: data.quizAnswerContainer.quizAnswer[0].endTime,
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
                    let t = {
                      quizName: data.quizAnswerContainer.quizAnswer[0].quizName,
                      quizCode: quizCode,
                    };
                    console.log(t);
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
    if (currentUser) {
      com = database.answers
        .doc(quizCode)
        .get()
        .then((doc) => {
          if (doc.exists) {
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
    handleTimeDifference,
  };
}
