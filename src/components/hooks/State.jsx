import { useState } from "react"

export const State = () => {

    const handleIncrement = () => {
        setnum(() => num + 1)
    }
    const handleDecrement = () => {
        setnum(() => num - 1)
    }
    const [num, setnum] = useState(0)
    return(
        <div className="form">
            <h1>{num}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}