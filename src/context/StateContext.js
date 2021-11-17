import React, { useContext, useState } from "react";

const StateContext = React.createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

export const StateProvider = ({ children }) => {
  const [logInCheck, setLogInCheck] = useState(false);
  const [alert, setAlert] = useState(false);
  const [profileExist, setProfileExist] = useState(true);
  const [quizExist, setQuizExist] = useState(false);
  const [qNo, setQNo] = useState(1);
  const [quiz, setQuiz] = useState([]);
  const [quizName, setQuizName] = useState("");
  const [displayQuiz, setDisplayQuiz] = useState(true);
  const [displayLeaderboard, setDisplayLeaderboard] = useState(false);
  const [displayQuizSearch, setDisplayQuizSearch] = useState(true);
  const [displayQuizStart, setDisplayQuizStart] = useState(true);
  const [displayQuizCreate, setDisplayQuizCreate] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [quizGiven, setQuizGiven] = useState(true);
  const [tempAnswer, setTempAnswer] = useState([]);
  const [quizShareAnswerName, setQuizShareAnswerName] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [quizShareName, setQuizShareName] = useState("");
  const [quizShareResultName, setQuizShareResultName] = useState("");
  const [score, setScore] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [leaderboardLoading, setLeaderboardLoading] = useState(false);
  const [tempQuizAnswer, setTempQuizAnswer] = useState({
    quizAnswer: [],
  });
  const value = {
    logInCheck,
    alert,
    setAlert,
    setLogInCheck,
    profileExist,
    setProfileExist,
    quizExist,
    setQuizExist,
    qNo,
    setQNo,
    quiz,
    setQuiz,
    tempQuizAnswer,
    quizName,
    setQuizName,
    setTempQuizAnswer,
    displayQuiz,
    setDisplayQuiz,
    displayLeaderboard,
    setDisplayLeaderboard,
    displayQuizSearch,
    setDisplayQuizSearch,
    displayQuizStart,
    setDisplayQuizStart,
    displayQuizCreate,
    setDisplayQuizCreate,
    quizComplete,
    setQuizComplete,
    tempAnswer,
    setTempAnswer,
    score,
    setScore,
    quizShareAnswerName,
    setQuizShareAnswerName,
    quizShareResultName,
    setQuizShareResultName,
    quizShareName,
    setQuizShareName,
    quizGiven,
    setQuizGiven,
    userScore,
    setUserScore,
    totalScore,
    setTotalScore,
    leaderboard,
    setLeaderboard,
    update,
    setUpdate,
    loading,
    setLoading,
    leaderboardLoading,
    setLeaderboardLoading,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
