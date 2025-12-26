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
        <div className="producthome">
            <h1>Products are Available Here</h1>
            <button className="product_button" onClick={postapi}>Clickkk Mee!!!</button>

            {postdata.map((post)=>(
                <div className="viewpage">
                    <img className="proimage" src={post.image}/> <br/>
                  <span className="api"> {post.title}</span><br/>   
                  <span className="price">{post.price}</span>
                </div>
               
            ))}

        </div>
    )
}
export default Apicall