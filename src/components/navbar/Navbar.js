import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../firebase";
import { useStateContext } from "../../context/StateContext";
import "./Navbar.scss";

export default function Navbar() {
  const { logOut } = useAuth();
  const {
    setLogInCheck,
    setProfileExist,
    setQuiz,
    setQuizExist,
    setQuizName,
    setDisplayQuiz,
    setDisplayLeaderboard,
    setQNo,
    setQuizComplete,
    setTempQuizAnswer,
    setScore,
    setQuizShareName,
    setQuizShareAnswerName,
    setQuizShareResultName,
    setQuizGiven,
  } = useStateContext();
  const [error, setError] = useState("");
  const [nav, setNav] = useState(false);

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
      setDisplayLeaderboard(false);
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
          window.location.reload();
        }
        return;
      });
    } catch {
      setError("Failed To LogOut");
      console.log(error);
    }
  };
  const handleNav = () => {
    if (!nav) {
      setNav(true);
      document.getElementById("burgerSpan1").classList.toggle("burgerSpan1");
      document.getElementById("burgerSpan2").classList.toggle("burgerSpan2");
      document.getElementById("burgerSpan3").classList.toggle("burgerSpan3");
    }
    if (nav) {
      document.getElementById("nav").classList.toggle("navFadeOut");
      document.getElementById("burgerSpan1").classList.toggle("burgerSpan1");
      document.getElementById("burgerSpan2").classList.toggle("burgerSpan2");
      document.getElementById("burgerSpan3").classList.toggle("burgerSpan3");
      setTimeout(() => {
        setNav(false);
      }, 500);
    }
  };
  return (
    <>
      <div
        className="navBurger absolute flex justify-evenly items-center flex-col"
        onClick={() => handleNav()}
      >
        <span id="burgerSpan1"></span>
        <span id="burgerSpan2"></span>
        <span id="burgerSpan3"></span>
      </div>
      {nav && (
        <nav id="nav" className="flex justify-center items-center flex-col">
          <div className="navOption flex justify-center items-center flex-col">
            <div className="logOutCon w-full flex justify-center items-center">
              <button className="" onClick={handleLogOut}>
                LogOut
              </button>
            </div>
          </div>
          <span></span>
          <span></span>
          <span></span>
        </nav>
      )}
    </>
  );
}
