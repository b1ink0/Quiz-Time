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
      <div className="logoCon flex justify-center items-center lg:fixed lg:top-0 lg:mt-0 lg:z-10 ">
        <nav className="w-full h-full flex justify-center items-center pr-8 pl-8 relative lg:justify-start">
          <div className="navBorderFirst hidden absolute left-0 w-full h-full pointer-events-none lg:block"></div>
          <div className="navBorderSecond hidden absolute left-0 w-full h-full pointer-events-none lg:block"></div>
          <h1 className="w-1/5">Quiz Time</h1>
          <div className="navBtnCon hidden justify-around items-center w-4/5 h-full lg:flex">
            <button className="h-full text-center font-bold text-xl cursor-pointer">
              About
            </button>
            <button className="h-full text-center font-bold text-xl cursor-pointer">
              Contact
            </button>
            <button className="h-full text-center font-bold text-xl cursor-pointer">
              Profile
            </button>
          </div>
        </nav>
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
