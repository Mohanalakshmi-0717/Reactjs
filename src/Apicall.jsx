import React, { useState } from "react";
import "./Apicall.css"

function Apicall(){

    const [postdata,setpostdata]=useState([])
    const postapi=async()=>{
        let prodata=await fetch("https://fakestoreapi.com/products")
        let product=await prodata.json()
        setpostdata(product)
    } 
    return(
        <div>
            <h1>Api Call</h1>
            <button onClick={postapi}>Clickkk Mee!!!</button>

            {postdata.map((post)=>(
                <div>
                  <h1 className="api"> {post.title}</h1> 
                  <h3 className="price">{post.price}</h3>
                </div>
               
            ))}

        </div>
    )
}
export default Apicall