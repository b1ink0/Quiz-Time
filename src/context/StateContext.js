import React, { useContext, useState, useRef } from "react";

const StateContext = React.createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

export const StateProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [logInCheck, setLogInCheck] = useState(false);
  const [alert, setAlert] = useState(false);
  const [profileExist, setProfileExist] = useState(true);
  const [username, setUsername] = useState("");
  const [quizExist, setQuizExist] = useState(false);
  const [qNo, setQNo] = useState(1);
  const [quiz, setQuiz] = useState([]);
  const [quizName, setQuizName] = useState("");
  const [quizCode, setQuizCode] = useState("");
  const [quizViewCode, setQuizViewCode] = useState("");
  const [displayQuiz, setDisplayQuiz] = useState(true);
  const [displayLeaderboard, setDisplayLeaderboard] = useState(false);
  const [displayQuizSearch, setDisplayQuizSearch] = useState(true);
  const [displayQuizStart, setDisplayQuizStart] = useState(true);
  const [displayQuizCreate, setDisplayQuizCreate] = useState(false);
  const [displaySaveQuiz, setDisplaySaveQuiz] = useState(false);
  const [displayQuiz_1, setDisplayQuiz_2] = useState(false);
  const [displayGivenQuiz, setDisplayGivenQuiz] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [quizGiven, setQuizGiven] = useState(true);
  const [quizGivenName, setQuizGivenName] = useState("");
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
  const loadingRef = useRef(null);
  const [loading_1, setLoading_1] = useState(false);
  const [leaderboardLoading, setLeaderboardLoading] = useState(false);
  const [myQuizEdit, setMyQuizEdit] = useState(false);
  const [myQuizEditCon, setMyQuizEditCon] = useState({
    quizCode: "",
    quizName: "",
  });
  const [tempQuizAnswer, setTempQuizAnswer] = useState({
    quizAnswer: [],
  });
  const [myQuizzes, setMyQuizzes] = useState([]);
  const [givenQuizzes, setGivenQuizzes] = useState([]);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [profile, setProfile] = useState(false);
  const [logout, setLogout] = useState(false);
  const [valid, setValid] = useState(true);
  const value = {
    isAdmin,
    setIsAdmin,
    logInCheck,
    alert,
    setAlert,
    setLogInCheck,
    profileExist,
    setProfileExist,
    username,
    setUsername,
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
    loadingRef,
    leaderboardLoading,
    setLeaderboardLoading,
    displaySaveQuiz,
    setDisplaySaveQuiz,
    myQuizzes,
    setMyQuizzes,
    myQuizEdit,
    setMyQuizEdit,
    myQuizEditCon,
    setMyQuizEditCon,
    displayQuiz_1,
    setDisplayQuiz_2,
    quizCode,
    setQuizCode,
    loading_1,
    setLoading_1,
    givenQuizzes,
    setGivenQuizzes,
    displayGivenQuiz,
    setDisplayGivenQuiz,
    quizViewCode,
    setQuizViewCode,
    quizGivenName,
    setQuizGivenName,
    about,
    setAbout,
    contact,
    setContact,
    logout,
    setLogout,
    profile,
    setProfile,
    valid,
    setValid,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
