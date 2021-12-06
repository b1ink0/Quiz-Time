import React, { useRef } from "react";
import "./Logout.scss";
export default function Logout({ setLogout, handleLogOut }) {
  const logoutRef = useRef();
  const handleLogoutBtn = () => {
    handleCancelBtn();
    setTimeout(() => {
      handleLogOut();
    }, 400);
  };
  const handleCancelBtn = () => {
    logoutRef.current.classList.toggle("fadeOut");
    setTimeout(() => {
      setLogout(false);
    }, 400);
  };
  return (
    <div
      ref={logoutRef}
      className="logoutCon w-screen h-screen fixed flex justify-center items-center flex-col top-0 left-0 z-10"
    >
      <div className="logout w-full flex justify-center items-center flex-col">
        <div className="logoutSub flex justify-center items-center flex-col">
          <h1 className="w-full text-center mt-2">Are You Sure?</h1>
          <div className="flex justify-center items-center w-full ">
            <button className="text-center" onClick={() => handleLogoutBtn()}>
              Logout
            </button>
            <button className="text-center" onClick={() => handleCancelBtn()}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
