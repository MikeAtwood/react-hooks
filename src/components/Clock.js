import { useState } from "react";

const Clock = () => {
    const [counter, setCounter] =useState(0)

    setInterval(() => {
        setCounter(count => count + 1)
    }, 1000)

    return (
        <p>{counter} seconds have passed</p>
    )
}

export default Clock
