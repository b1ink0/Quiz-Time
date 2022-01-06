import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./LogInPage.scss";

export default function LogIn() {
  const [error, setError] = useState("");
  const { logIn } = useAuth();

  const handleLogIn = async () => {
    try {
      setError("");
      await logIn();
    } catch {
      setError("Failed To Log In");
      console.log(error);
    }
  };

  return (
    <>
      <div className="welcomePage flex justify-center items-center flex-col">
        <div className="logoCon flex justify-center items-center">
          <h1>Quiz Time</h1>
        </div>
        <p className="text-center"></p>
        <div className="logInBtnCon flex justify-center items-center font-mono">
          <button onClick={handleLogIn} type="button">
            Log In
          </button>
        </div>
        <p className="quoteCon text-center">
          <span>"</span>You should know little about a lot<span>"</span>
        </p>
      </div>
    </>
  );
}
