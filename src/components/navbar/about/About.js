import React, { useRef } from "react";
import "./About.scss";
import Logo from "../../media/logo.svg";

export default function About({ setAbout }) {
  const aboutRef = useRef(null);
  const handleCancel = () => {
    aboutRef.current.classList.toggle("fadeOut");
    setTimeout(() => {
      setAbout(false);
    }, 400);
  };
  return (
    <div
      ref={aboutRef}
      className="aboutCon w-screen h-screen fixed top-0 left-0 flex justify-start items-center flex-col z-10"
    >
      <div
        className="aboutCancel absolute flex justify-evenly items-center flex-col top-3 right-3"
        onClick={handleCancel}
      >
        <span className="w-full rounded-full absolute"></span>
        <span className="w-full rounded-full absolute"></span>
      </div>
      <div className="logo flex justify-center items-center flex-col w-full mt-12">
        <img src={Logo} alt="logo" className="w-24 h-24 rounded-full" />
        <h1 className="font-bold text-2xl mt-3">Quiz-Time</h1>
      </div>
      <div className="points flex justify-center items-center w-full mt-4">
        <h1 className="text-center w-5/6 text-lg">Create Quiz</h1>
      </div>
      <div className="points flex justify-center items-center w-full mt-4">
        <h1 className="text-center w-5/6 text-lg">Share Quiz With Quiz-Code</h1>
      </div>
      <div className="points flex justify-center items-center w-full mt-4">
        <h1 className="text-center w-5/6 text-lg">Quiz Leaderboard</h1>
      </div>
      <div className="points flex justify-center items-center w-full mt-4">
        <a
          href="https://github.com/b1ink0/Quiz-Time"
          rel="noreferrer"
          target="_blank"
          className="text-center w-5/6 text-lg"
        >
          Quiz-Time Source-Code
        </a>
      </div>
    </div>
  );
}
