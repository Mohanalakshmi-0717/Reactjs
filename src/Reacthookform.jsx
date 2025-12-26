import React from "react";
import { useForm } from "react-hook-form"

function Reacthookform() {
    const {register,handleSubmit} = useForm()
    const onsubmit=(data)=>{
        console.log(data);
        

    }
    return (
        <div>
            <h1>Hook Form</h1>

            <input {...register("Name")} placeholder="enter name"/>
            <button onClick={handleSubmit(onsubmit)}>Submit</button>
        </div>
    )
}

export default Reacthookform