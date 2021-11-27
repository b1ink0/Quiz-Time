import React, { useState, useEffect } from "react";
import { useStateContext } from "../../context/StateContext";
import "./Dashboard.scss";
import Quiz from "../quizs/Quiz";
import Loading from "../sub-components/Loading";
import ProfileInput from "../profile/ProfileInput";
import Navbar from "../navbar/Navbar";
import Alert from "../sub-components/Alert";
import Back from "../sub-components/Back";
import useFunction from "../../hooks/useFunction";
import QuizContainer from "../quiz container/QuizContainer";

export default function Dashboard() {
  const [navBurger, setNavBurger] = useState(true);
  const {
    handleProfileExist,
    handleQuizShare,
    handleSetQuiz,
    handleSetQuizData,
    handleMyQuizzes,
  } = useFunction();
  const {
    profileExist,
    alert,
    quizExist,
    displayQuiz,
    setDisplayQuiz,
    quizShareAnswerName,
    quizShareResultName,
    update,
    setUpdate,
    loading,
    setLoading,
  } = useStateContext("");

  useEffect(() => {
    setLoading(true);
    handleProfileExist();
    handleMyQuizzes();
  }, []);

  useEffect(() => {
    handleQuizShare();
  }, [profileExist]);

  useEffect(() => {
    handleSetQuiz();
  }, [quizShareAnswerName]);

  useEffect(() => {
    handleSetQuizData();
  }, [quizShareResultName]);

  useEffect(() => {
    setDisplayQuiz(true);
  }, [update, setUpdate]);

  return (
    <>
      <div className="logoCon flex justify-center items-center">
        <h1>Quiz Time</h1>
      </div>
      {!displayQuiz && <Back />}
      {alert && <Alert />}
      {navBurger && <Navbar />}
      {!profileExist ? <ProfileInput /> : displayQuiz && <QuizContainer />}
      {!displayQuiz && <Quiz />}
      {loading && !quizExist && profileExist && <Loading flag={false} />}
    </>
  );
}
