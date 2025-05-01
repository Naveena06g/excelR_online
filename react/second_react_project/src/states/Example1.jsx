import {useState} from "react";

function Example1(){
     
     let [name,setName]=useState('nav');
     let change=()=>{
        setName("naveena")
     }
     return(
        <>
          <h1>{name}</h1>
          <button onClick={change}>Click to change Name</button>
        </>
    )
}
export default Example1;