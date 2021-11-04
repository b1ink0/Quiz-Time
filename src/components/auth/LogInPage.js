import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import { auth } from "../../firebase";
import Dashboard from "../dashboard/Dashboard";
import LogIn from "./LogIn";

export default function LogInPage() {
  const { currentUser } = useAuth();
  const { logInCheck, setLogInCheck } = useStateContext();
  if (currentUser) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLogInCheck(true);
      } else if (!user) {
        setLogInCheck(false);
      }
      return;
    });
  }
  return <>{logInCheck ? <Dashboard /> : <LogIn />}</>;
}
