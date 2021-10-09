import React, { useState, useEffect } from 'react'
import { useStateContext } from '../../context/StateContext'

export default function Question({quiz}) {
    const { tempAnswer, setTempAnswer, setQuizComplete } = useStateContext()
    const [loading, setLoading] = useState(false)
    let arr = tempAnswer;
    if (arr[0] === undefined){
        quiz.map(a => {
            arr.push({
                qNo: a.qNo,
                answer: ""
            })
        })
    }
    const handleSelection = (e) => {
        arr.forEach(a => {
            if (parseInt(e.target.name) === a.qNo){
                let tempA 
                quiz.forEach(q => {
                    if (q.qNo === a.qNo){
                        tempA = e.target.value
                    }
                })
                let temp = {
                    qNo: parseInt(e.target.name),
                    answer: tempA
                }
                arr[a.qNo - 1] = temp
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setTempAnswer(arr)
        setQuizComplete(true)
    }
    return (
        <div>
            <form onSubmit={ e => handleSubmit(e) }>
            {
                quiz && quiz.map((q) => (
                    <div key={q.qNo} className="queCon">
                        <div className="qCon">
                            <h1>{q.q}</h1>
                        </div>
                        <div className="options">
                            <div className="radioBtnCon">
                                <label>{q.a}</label>
                                <input type="radio" value="a" name={q.qNo} onChange={(e) => handleSelection(e)} required/>
                            </div>
                            <div className="radioBtnCon">
                                <label>{q.b}</label>
                                <input type="radio" value="b" name={q.qNo} onChange={(e) => handleSelection(e)} required/>
                            </div>
                            <div className="radioBtnCon">
                                <label>{q.c}</label>
                                <input type="radio" value="c" name={q.qNo} onChange={(e) => handleSelection(e)} required/>
                            </div>
                            <div className="radioBtnCon">
                                <label>{q.d}</label>
                                <input type="radio" value="d" name={q.qNo} onChange={(e) => handleSelection(e)} required/>
                            </div>
                        </div>
                    </div>
                ))
            }
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
