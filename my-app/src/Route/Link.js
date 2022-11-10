import React from "react";
import {Link} from "react-router-dom";



const Navbar = ()=>{
     const linkArr = [
       {
        to:"/",
        title:"Home"
       },
       {
        to:"/men",
        title:"Men"
       },
       {
        to:"/women",
        title:"Women"
       },
       {
        to:"/kids",
        title:"Kids"
       },
       {
        to:"/login",
        title:"Login"
       }
     ]
   
    return (
        <>
        {
            linkArr.map((ele,i)=><Link key={i} to={ele.to}>{ele.title}</Link>)
        }
        </>
    )
}
export default Navbar