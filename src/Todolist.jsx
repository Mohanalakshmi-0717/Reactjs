import React, { useEffect, useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { useSearchParams } from 'react-router';
import axios from 'axios';



export default function Todolist() {

  const[inputtodo,setinputtodo]=useState("")
  const[apidata,setapidata]=useState([])

  const handleinput=(e)=>{
    setinputtodo(e.target.value)
  }

  useEffect(()=>{
    handleapiget()

  },[])

  const handleapiget=async ()=>{
    let todolist=await axios.get("http://localhost:3000/todoList"); 
    setapidata(todolist.data)
  
  }

  const handleclick=async ()=>{

    let body={
      task:inputtodo
    }
    let senddata= await axios.post("http://localhost:3000/todoList",body)
    setinputtodo("")
    handleapiget()
    
  }
  const handledelete=async (id)=>{
    console.log(id);
    let deletedata=await axios.delete("http://localhost:3000/todoList/"+id)
    handleapiget()
  }

  const handleedit=async(data)=>{

    let promptdata=prompt("enter u r edit data",data.task) 
    let body={
      id:data.id,
      task:promptdata
    }

    let editdata=await axios.put("http://localhost:3000/todoList/"+data.id,body)
    handleapiget()
    
  }

  return (
    <div>
      <input value={inputtodo} onChange={handleinput} placeholder='enter u r todo'/>
      <button onClick={handleclick}>Submit</button>
      <div>
        <ol>
          {apidata.map((da)=>(
            <li key={da.id}>
            {da.task}
            <button onClick={()=>handledelete(da.id)}>Delete</button>
            <button onClick={()=>handleedit(da)}>Edit</button>
            </li>
            

          ))}
          
        </ol>
      </div>
    </div>
  )
}
