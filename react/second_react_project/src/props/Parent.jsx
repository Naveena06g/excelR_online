//top level component
//which shares data with child
import Child from "./Child.jsx";
const Parent=()=>{
    return(
        <>
          <h1>Parent</h1>
          <Child name="nav" />
        </>
    )
}
export default Parent;