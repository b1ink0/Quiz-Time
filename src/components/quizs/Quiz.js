import React, { useState, useEffect } from "react";
import { database, firestore } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import Question from "./Question";
import "./Quiz.scss";

export default function Quiz() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const {
    quizExist,
    quiz,
    quizComplete,
    tempAnswer,
    score,
    setScore,
    quizShareName,
    quizShareAnswerName,
    quizShareResultName,
  } = useStateContext();
  const handleScore = (data) => {
    let count = 0;
    data.quizAnswerContainer.quizAnswer.forEach((q) => {
      if (q.answer === tempAnswer[q.qNo - 1].answer) {
        count++;
      }
    });
    setScore(count);
    setLoading(false);
    let com;
    if (currentUser) {
      com = database.results
        .doc(quizShareResultName)
        .get()
        .then((doc) => {
          let arr = doc.data().quizResultContainer.submissions;
          arr.push({
            uid: currentUser.uid,
            quizName: quizShareName,
            userScore: count,
            totalScore: tempAnswer.length,
          });
          if (doc.data().quizResultContainer.submissions[0] !== undefined) {
            let condition = false;
            doc.data().quizResultContainer.submissions.forEach((r) => {
              if (r.uid === currentUser.uid) {
                condition = true;
              }
            });
            console.log(condition);
            if (condition === false) {
              firestore
                .collection("results")
                .doc(quizShareResultName)
                .update({
                  quizResultContainer: {
                    quizName: quizShareName,
                    submissions: arr,
                  },
                });
            }
          } else {
            let condition = false;
            doc.data().quizResultContainer.submissions.forEach((r) => {
              if (r.uid === currentUser.uid) {
                condition = true;
              }
            });
            console.log(condition);
            if (condition === false) {
              firestore
                .collection("results")
                .doc(quizShareResultName)
                .update({
                  quizResultContainer: {
                    quizName: quizShareName,
                    submissions: arr,
                  },
                });
            }
          }
          count = 0;
        });
    }
    return com;
  };
  useEffect(() => {
    let com;
    if (quizComplete) {
      if (currentUser) {
        com = database.answers
          .doc(quizShareAnswerName)
          .get()
          .then((doc) => {
            if (doc.exists) {
              handleScore(doc.data());
            }
          });
      }
    }
    return com;
  }, [quizComplete]);
  return (
    <>
      {quizExist && !quizComplete ? (
        <Question quiz={quiz} />
      ) : !quizComplete ? (
        "Quiz Does Not Exist"
      ) : (
        !loading && (
          <div className="resultCon w-full flex justify-center items-center">
            <div className="result flex justify-center items-center flex-col">
              <h1>
                Score: {score}/{tempAnswer.length}
              </h1>
              <h1>Quiz has been submited!</h1>
            </div>
          </div>
        )
      )}
    </>
  );
}
