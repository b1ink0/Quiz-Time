import React, { useState, useEffect } from "react";
import { useStateContext } from "../../context/StateContext";
import "./Dashboard.scss";
import Quiz from "../quizs/Quiz";
import ProfileInput from "../profile/ProfileInput";
import Navbar from "../navbar/Navbar";
import Alert from "../sub-components/Alert";
import Back from "../sub-components/Back";
import useFunction from "../../hooks/useFunction";
import QuizContainer from "../quiz container/QuizContainer";
import Loading from "../sub-components/Loading";

export default function Dashboard() {
  const [navBurger, setNavBurger] = useState(true);
  const { handleProfileExist, handleMyQuizzes } = useFunction();
  const { profileExist, alert, displayQuiz, setLoading, loading } =
    useStateContext("");

  useEffect(() => {
    handleProfileExist();
    handleMyQuizzes();
    setLoading(true);
  }, []);

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
      {loading && <Loading />}
    </>
  );
}
