import React, { useState } from "react";

import "./form.css"

function Form(){

    const[name,setname]=useState("")
    const[age,setage]=useState("")
    const[mobile,setmobile]=useState("")
    const[email,setemail]=useState("")
    const[close,setclose]=useState(true)
    
   

    const handlename=(e)=>{
        setname(e.target.value)
    }

    const handleage=(e)=>{
        setage(e.target.value)
    }

    const handlemobile=(e)=>{
        setmobile(e.target.value)

    }
    const handleemail=(e)=>{
        setemail(e.target.value)
    }

   const handleclose=()=>{
    setclose(false)   
   }

    
    

    return(
        <div className="form-container">          
           {close?
            <form>
                <h1>Form</h1>
                <label>Name : </label>
                <input onChange={handlename} placeholder="Enter name"/>
                <br/>
                <br/>
                 <label>Age : </label>
                <input type="number" onChange={handleage} placeholder="Enter Age"/>
                <br/>
                <br/>
                 <label>Mobile : </label>
                <input type="number" onChange={handlemobile} placeholder="Enter"/>
                <br/>
                <br/>
                 <label>Email : </label>
                <input type="email" onChange={handleemail} placeholder="Enter mail"/>
                <br/>
                <br/>

                <button onClick={handleclose}>Submit</button>
        
            </form>:<div>
                <h3>Your Form Has been Submitted</h3>
                <h4>Name:{name}</h4>
                <h4>Age:{age}</h4>
                <h4>Mobile Number:{mobile}</h4>
                <h4>Email:{email}</h4>
            </div>
}
        </div>
           
    )
}

export default Form


 