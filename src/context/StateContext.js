import React, { useContext, useState } from 'react'

const StateContext = React.createContext()

export const useStateContext = () => {
    return useContext(StateContext)
}

export const StateProvider = ( { children } ) => {
    const [logInCheck, setLogInCheck] = useState(false)
    const [profileExist, setProfileExist] = useState(true)
    const [quizExist, setQuizExist] = useState(false)
    const [qNo, setQNo] = useState(1)
    const [quiz, setQuiz] = useState([])
    const [quizName, setQuizName] = useState("")
    const [displayQuiz, setDisplayQuiz] = useState(true)
    const [quizComplete, setQuizComplete] = useState(false)
    const [quizGiven, setQuizGiven] = useState(true)
    const [tempAnswer, setTempAnswer] = useState([])
    const [quizShareAnswerName, setQuizShareAnswerName] = useState("")
    const [quizShareName, setQuizShareName] = useState("")
    const [quizShareResultName, setQuizShareResultName] = useState("")
    const [score, setScore] = useState(0)
    const [userScore, setUserScore] = useState(0)
    const [totalScore, setTotalScore] = useState(0)
    const [tempQuizAnswer, setTempQuizAnswer] = useState({
        quizAnswer:[]
    })
    const value = {
        logInCheck,
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
        setTotalScore
    }

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}