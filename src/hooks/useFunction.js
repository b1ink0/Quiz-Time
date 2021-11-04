import React from "react";
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
  return {
    handleBackSmooth,
    handleBack,
    handleDirectBack,
    handleProfileExist,
    handleQuizShare,
    handleSetQuiz,
  };
}
