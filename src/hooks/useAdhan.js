import { useEffect, useState } from "react"

const useAdhan = () => {
    const [adhan, setAdhan] = useState({})
    useEffect(() => {
        fetch('https://shielded-reaches-48639.herokuapp.com/pray')
            .then(res => res.json())
            .then(data => setAdhan(data))
    }, [])
    return adhan;
}
export default useAdhan;