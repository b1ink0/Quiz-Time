import React, { useState, useEffect } from "react";
import { auth, database, firestore } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import "./Dashboard.scss";
import Quiz from "../quizs/Quiz";
import logo from "../auth/media/logoT.svg";

export default function Dashboard() {
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [update, setUpdate] = useState(false);
  const [alert, setAlert] = useState(false);
  const { currentUser, logOut } = useAuth("");
  const {
    setLogInCheck,
    profileExist,
    setProfileExist,
    setQuiz,
    setQuizExist,
    quizExist,
    setQuizName,
    quizName,
    displayQuiz,
    setDisplayQuiz,
    setQNo,
    setQuizComplete,
    setTempAnswer,
    setTempQuizAnswer,
    setScore,
    quizShareName,
    setQuizShareName,
    quizShareAnswerName,
    setQuizShareAnswerName,
    quizShareResultName,
    setQuizShareResultName,
    quizGiven,
    setQuizGiven,
    userScore,
    setUserScore,
    totalScore,
    setTotalScore,
  } = useStateContext("");
  const handleLogOut = async () => {
    try {
      logOut();
      setProfileExist(true);
      setLogInCheck(false);
      setQuizExist(false);
      setQNo(1);
      setQuiz([]);
      setQuizName("");
      setDisplayQuiz(true);
      setQuizComplete(false);
      setQuizShareName("");
      setQuizShareAnswerName("");
      setQuizShareResultName("");
      setQuizGiven(true);
      setTempQuizAnswer({
        quizAnswer: [],
      });
      setScore(0);
      setError("");
      auth.onAuthStateChanged((user) => {
        if (!user) {
          setLogInCheck(false);
        }
        return;
      });
    } catch {
      setError("Failed To LogOut");
      console.log(error);
    }
  };
  useEffect(() => {
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
  }, []);
  useEffect(() => {
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
  }, [profileExist]);
  useEffect(() => {
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
  }, [quizShareResultName]);
  const handleSubmit = (e) => {
    e.preventDefault();
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let com;
    if (email.match(validRegex)) {
      if (currentUser) {
        com = database.users
          .doc(currentUser.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              return;
            } else {
              database.users.doc(currentUser.uid).set({
                fullName: {
                  firstName: firstName,
                  middleName: middleName,
                  lastName: lastName,
                  username: username,
                },
                email: email,
                uid: currentUser.uid,
              });
              setFirstName("");
              setMiddleName("");
              setLastName("");
              setEmail("");
              setProfileExist(true);
            }
          });
      }
    } else {
      window.location.reload();
    }
    return com;
  };
  const handleQuizGiven = () => {
    if (quizGiven === false) {
      setDisplayQuiz(false);
    }
  };
  const handleBackAlert = () => {
    setAlert(true);
  };
  const handleBackSmooth = () => {
    document.querySelector(".preBack").classList.toggle("fadeOut");
    document.querySelector(".preBackCon").classList.toggle("fadeOut2");
    setTimeout(() => {
      setAlert(false);
    }, 410);
  };
  const handleBack = () => {
    handleBackSmooth();
    setTimeout(() => {
      setUpdate(!update);
    }, 410);
  };
  useEffect(() => {
    setDisplayQuiz(true);
  }, [update, setUpdate]);
  return (
    <>
      <div className="logoCon flex justify-center items-center">
        <img src={logo} alt="logo" />
        <h1>Quiz Time</h1>
      </div>
      {!displayQuiz && (
        <div
          className="back absolute flex justify-center items-center"
          onClick={() => setAlert(true)}
        >
          <img src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </div>
      )}
      {alert && (
        <div className="preBackCon w-full flex justify-center items-center">
          <div className="preBack flex justify-center items-center flex-col">
            <h1>If you go back your progress will be lost!</h1>
            <h1>Do you still want to go back ?</h1>
            <div className="w-full flex justify-evenly items-center">
              <button onClick={() => handleBackSmooth()}>No</button>
              <button onClick={() => handleBack()}>Yes</button>
            </div>
          </div>
        </div>
      )}
      {displayQuiz && (
        <div className="subTitle">
          <h1>Avilable Quizes</h1>
        </div>
      )}
      {!profileExist ? (
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="formCon flex justify-start items-center flex-col"
        >
          <div className="inputCon">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="inputCon">
            <label>Middle Name:</label>
            <input
              type="text"
              value={middleName}
              required
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </div>
          <div className="inputCon">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="inputCon">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              required
              minLength="4"
              maxLength="10"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="inputCon">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      ) : (
        displayQuiz &&
        (quizExist ? (
          <div
            className="quizPrevCon cursor-pointer flex justify-center items-center w-full flex-col"
            onClick={() => handleQuizGiven()}
          >
            <div className="quizCon flex justify-center items-start flex-col text-center">
              <h1 className="w-full text-center">Quiz Name: {quizName}</h1>
              {quizGiven ? (
                <div className="w-full text-center">
                  <p className="w-full text-center">
                    You have already submited the quiz
                  </p>
                  <h1 className="w-full text-center">
                    Score: {userScore}/{totalScore}
                  </h1>
                </div>
              ) : (
                <p className="w-full text-center">Click To Start The Quiz</p>
              )}
            </div>
          </div>
        ) : (
          <h1 className="w-full text-center">"Quiz are not avilable yet!"</h1>
        ))
      )}
      {!displayQuiz && <Quiz />}
      <div className="logOutCon w-full flex justify-center items-center">
        <button className="" onClick={handleLogOut}>
          LogOut
        </button>
      </div>
    </>
  );
}
