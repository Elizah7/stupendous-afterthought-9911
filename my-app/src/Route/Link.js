import React from "react";
import {Link} from "react-router-dom";

import {AiOutlineHeart} from "react-icons/ai"
import {BsPersonFill,BsBell} from "react-icons/bs"
import {CiSearch} from "react-icons/ci"

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
       }
     ]
   
    return (
        <>
        <div className="navbar">
         <div className="navbar-child">
        {
            linkArr.map((ele,i)=><Link key={i} to={ele.to}> <h5 className="h5">{ele.title}</h5></Link>)
        }
        <h5>Beauty</h5>
        <h5>Designers</h5>
        <h5>Comunnity</h5>
        </div>
        <div className="icons">
             <BsBell/>
             <AiOutlineHeart/>
           <Link to="/login"> <BsPersonFill/></Link>
     
           <CiSearch/>
        

           
        
        </div>
        </div>
        
        </>
       
    )
}
export default Navbar