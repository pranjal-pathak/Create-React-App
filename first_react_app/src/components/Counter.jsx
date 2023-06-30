import React, { useState } from 'react'

function Counter() {
    // pass initial value as 0
    let [count,setCount] =useState(0);
    const incrementCounter=()=>{
        console.log("increment ran");
        setCount(count+1);
    }
    const decrementCounter=()=>{
        console.log("decrement ran");
        setCount(count--);
    }
    console.log("I ran");
  return (
   <>
    <button onClick={incrementCounter}> +</button>
    <p>{count}</p>
    <button onClick={decrementCounter}> - </button>
    </>
  )
}

export default Counter