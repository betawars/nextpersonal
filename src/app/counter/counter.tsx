"use client"

import { useState } from "react"


export function Counter(){
    const[counter,setCounter]= useState(0)
    const handleIncrement = () =>{
        const t = counter+1
        setCounter(t)
    }
    const handleDecrement = () => {
        const t = counter-1
        setCounter(t)
    }
    return(
        <div>
            <p>{counter}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}