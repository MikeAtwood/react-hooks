import { useEffect, useState } from "react";

const Clock = () => {
    const [counter, setCounter] =useState(0)

    useEffect(() =>{
        // This executes the side effect (starts the clock)
        const key = setInterval(() => {
            setCounter(count => count + 1)
        }, 1000)
        
        // cleanup function
        return () => {
            clearInterval(key)
        }
    }, [])
    

    return (
        <p>{counter} seconds have passed</p>
    )
}

export default Clock
