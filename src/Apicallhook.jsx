import React, { useEffect, useState } from 'react'

 function Apicallhook() {

    const[data,setdata]=useState([])

   const apicall=async()=>{
    let productdata=await fetch("https://fakestoreapi.com/products")
    let pdata=await productdata.json()
    setdata(pdata)

    useEffect(()=>{
    apicall()
     
    },[])

   }
  return (
    <div>
        <h1>hiii</h1>
        <button onClick={apicall}>Click</button>

        {data.map((post)=>(
            <div>
            <h1>{post.title}</h1>
            <h2>{post.price}</h2>
            </div>
        ))}
      
    </div>
  )
}
export default Apicallhook