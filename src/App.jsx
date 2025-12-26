import React, { useState } from "react";
import Counter from "./Counter";
import Names from "./Names";
import Apicall from "./Apicall";
import Lifecycle from "./Lifecycle";
import Apicallhook from "./Apicallhook";
import Form from "./Form";
import Reacthookform from "./Reacthookform";
import Home from "../Home";
import { BrowserRouter,Routes,Route,Link } from "react-router";
import Movie from "./Movie";
import About from "./About";
import Todolist from "./Todolist";

function App(){

  const[close,setclose]=useState(true)

  const handleclose=()=>{
   setclose(false)
   

  }
  return(
    // <BrowserRouter>
    
    <div>
        
    {/* <h1>hello</h1>
    <h2>Welcome</h2> */}
    {/* <Counter></Counter> */}
    {/* <Names></Names> */}
    <Apicall></Apicall>

  {/* <nav>
    <Link to="/">Home</Link>
    <Link to="/reactform">react-form </Link>
    <Link to="/form">Form</Link>
  </nav>

  <Routes> 
<Route path="/" element={<Apicallhook/>} />
<Route path="/reactform" element={<Reacthookform/>} />
<Route path="/form" element={<Form/>} />

</Routes>  */}

    {/* <br></br>

    {close? <Lifecycle/>:""}
    <br></br>

    <button onClick={handleclose}>Closee</button> */}

    {/* <nav>
      <Link to="/home" className="linktag">Home</Link>
      <Link to="/movie" className="linktag">Movie</Link>
      <Link to="/about" className="linktag">About</Link>
    </nav>

    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/movie" element={<Movie/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes> */}
     {/* <Todolist/> */}
     {/* <Reacthookform/> */}
     
    </div>
    
      // {/* </BrowserRouter> */}
  )
}

export default App