import React from "react";
import {Link} from "react-router-dom";
import{Container,Image} from "@chakra-ui/react"


const Navbar = ()=>{
     const linkArr = [
       {
        to:"/",
        title:"Home"
       },
       {
        to:"/men",
        title:"Women"
       },
       {
        to:"/women",
        title:"Men"
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
        <Container display="flex" border="1px solid red" h="80px" w="100%">
         <Image   borderRadius='full'
           boxSize='150px'
           src='stupendous-afterthought-9911\my-app\src\logo\Wal.png'
           alt='Dan Abramov'
         />
        {
            linkArr.map((ele,i)=><Link key={i} to={ele.to}>{ele.title}</Link>)
        }
        </Container>
 
     
        </>
    )
}
export default Navbar