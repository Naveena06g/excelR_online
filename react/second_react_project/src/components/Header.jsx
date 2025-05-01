const Header= ()=>{

    let menu=["Home","About","Contact","Services","Portofolio"];
    return(
        <>
        <h1>Header</h1>
        <ul>
           {
               menu.map(
                   (element)=>(
                   <li>{element}</li>
                 ))
            }
        </ul>
        </>
    )

}

export default Header;