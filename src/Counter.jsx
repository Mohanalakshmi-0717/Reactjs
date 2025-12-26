import React, { useState } from "react";
import Names from "./Names";

function Counter(){
   const [count,setcount]=useState(0)

    const add=()=>{
    //    setcount(count+1)
    if(count==10){
       setcount(0)
     }else{
      setcount(count+1)
        
    }
    }
    return(
        <div>
        <h1>Counter-{count}</h1>
        <button onClick={add}>Increment</button>
        </div>
    )
}

export default Counter