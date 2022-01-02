import React, { useRef } from "react";
import { useStateContext } from "../../../context/StateContext";
import "./Profile.scss";
import ProfileLogo from "../../media/profile.svg";

export default function Profile({ setProfile, setLogout }) {
  const { username } = useStateContext();
  const profileRef = useRef(null);
  const handleCancel = (flag) => {
    profileRef.current.classList.toggle("fadeOut");
    setTimeout(() => {
      setProfile(false);
      if (flag) {
        setLogout(true);
      }
    }, 400);
  };
  return (
    <div
      ref={profileRef}
      className="profileCon w-screen h-screen fixed top-0 left-0 flex justify-center items-center flex-col z-10"
    >
      <div
        className="profileCancel absolute flex justify-evenly items-center flex-col top-3 right-3 cursor-pointer"
        onClick={() => handleCancel(false)}
      >
        <span className="w-full rounded-full absolute"></span>
        <span className="w-full rounded-full absolute"></span>
      </div>
      <div className="logo flex justify-center items-center flex-col w-full mt-12">
        <img src={ProfileLogo} alt="logo" className="w-24 h-24 rounded-full" />
        <h1 className="font-bold text-2xl mt-3">{username}</h1>
      </div>
      <div className="logOutBtnCon flex justify-center items-center w-full mt-3">
        <button onClick={() => handleCancel(true)}>Log Out</button>
      </div>
    </div>
  );
}
