import { useEffect, useState } from "react"

const useQuestions = () => {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        fetch('https://shielded-reaches-48639.herokuapp.com/questions')
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, [questions])
    return questions;
}
export default useQuestions;