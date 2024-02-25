import { useState } from "react";
function Test(){
    let [counter,setCounter] = useState(10);
  
    // let counter = 5;
    const addValue = ()=>{
        console.log("Value added", counter);
        // counter += 1;
        if(counter < 20){
        setCounter(counter+1)
        }

    }
    const removeValue = ()=>{
        if(counter > 0){
        setCounter(counter-1);
        }
    }
    return(
        <>
        <h1>counter </h1>
        <h3>Counter value:{counter}</h3>
        <button id="btn" onClick={addValue}>add value:{counter}</button>
        <br />
        <button onClick={removeValue}>remove value{counter}</button>
        <p>value: {counter}</p>
        </>

    )
}

export default Test;