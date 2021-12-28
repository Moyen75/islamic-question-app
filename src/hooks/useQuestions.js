import { useEffect, useState } from "react"

const useQuestions=()=>{
    const [questions,setQuestions]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/questions')
        .then(res=>res.json())
        .then(data=>setQuestions(data))
    },[questions])
    return questions;
}
export default useQuestions;