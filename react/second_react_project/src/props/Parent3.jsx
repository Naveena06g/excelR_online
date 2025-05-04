import React from 'react'

const Parent3 = () => {
    let arr=[1,2,3,4,5];
  return (
    <>
    <div>Parent3</div>
    <Child3 arr={arr}/>
    </>
  )
}
const Child3=(props)=> {
    let arr=props.arr.map((element)=>{
            if(element%2==1){
                return element;
            }
        }
    );
    return(
        <>
        <div>{arr}</div>
        <div>Child3</div>
        </>
    )
}
export default Parent3