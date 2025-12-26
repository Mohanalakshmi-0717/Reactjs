import React, { useState } from "react";
import "./Names.css"
function Names(){
    const [name,setname]=useState("Magiiii")

    const namechange=()=>{
        setname("Mohana")
    }
    return(
        <div>
            <h1 className="nameh1">Names-{name}</h1>
            <button onClick={namechange} className="namebutton" >Change</button>
        </div>
    )
}

export default Names