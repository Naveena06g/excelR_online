import { useState } from "react";
import dora from "./d.jpg"
import nature from './133872990027902372.jpg'
const Example3=()=>{
    let[image,setImage]=useState(dora);
    let change=()=>{
        setImage(nature);
    }
    return(
        <>
        <img src={image} alt="" width="200px" height="200px"/>
        <br />
        <button onClick={change}>Click</button>
        </>
    )
}
export default Example3;