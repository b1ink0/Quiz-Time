import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../firebase";
import { useStateContext } from "../../context/StateContext";
import "./Navbar.scss";
import About from "./about/About";
import Contact from "./contact/Contact";
import Logout from "./logout/Logout";
import Profile from "./profile/Profile";

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
    username,
    about,
    setAbout,
    contact,
    setContact,
    logout,
    setLogout,
    profile,
    setProfile,
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
          // window.location.reload();
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
      {about && <About setAbout={setAbout} />}
      {contact && <Contact setContact={setContact} />}
      {profile && <Profile setProfile={setProfile} setLogout={setLogout} />}
      {logout && <Logout setLogout={setLogout} handleLogOut={handleLogOut} />}
      <div
        className="navBurger absolute flex justify-evenly items-center flex-col lg:hidden"
        onClick={() => handleNav()}
      >
        <span id="burgerSpan1"></span>
        <span id="burgerSpan2"></span>
        <span id="burgerSpan3"></span>
      </div>
      {nav && (
        <nav id="nav" className="flex justify-center items-center flex-col">
          <div className="navOption flex justify-start items-center flex-col">
            <div className="profileCon w-full flex justify-center items-center flex-col mt-24">
              <div className="profileImgCon w-24 h-24 rounded-full">
                <img src={profile} alt="Profile" />
              </div>
              <div className="usernameCon w-full flex justify-center items-center mt-2">
                <h1 className="font-bold tracking-wider text-2xl">
                  {username}
                </h1>
              </div>
            </div>
            <div className="aboutCon w-full flex justify-center items-center">
              <button
                onClick={() => {
                  setAbout(true);
                  handleNav();
                }}
              >
                About
              </button>
            </div>
            <div className="contactCon w-full flex justify-center items-center">
              <button
                onClick={() => {
                  setContact(true);
                  handleNav();
                }}
              >
                Contact
              </button>
            </div>
            <div className="logOutCon w-full flex justify-center items-center">
              <button onClick={() => setLogout(true)}>Log-out</button>
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
