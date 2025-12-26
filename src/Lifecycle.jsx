import React, { useEffect, useState } from "react";

function Lifecycle(){

    const[count,setcount]=useState(0)

    const countinc=()=>{
        setcount(count+1)

    }

    const[name,setname]=useState("Riyaa")

    const changename=()=>{
        setname("mohana")

    }


    useEffect(()=>{
        console.log("hi");

        return()=>{
            console.log("dead");
            
        }
        
    },[name])
    return(
        <div>
            <h1>Hook-useEffect</h1>

            {count}
            <button onClick={countinc}>Counter</button>

            {name}

            <button onClick={changename}>Name</button>
        </div>
    )
}

export default Lifecycle