import React from "react";
import { useState,useEffect } from "react";
import { GetData } from "./Getdata";
import Img from "./Img";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../style/style.css"
export const style={
    display:"flex",
    width:"80%",
    height:"400px",
    margin:"auto",
    marginTop:"5%",
    justifyContent:"space-between"
 }
 export const stylecont = {
    display: "flex",
   alignItems:"center",
   justifyContent:"space-between",
    width:"80%",
    height:"400px",
    margin:'auto',
    marginTop:"20px",

  
 }
export const style2={
    width:"24%",
    height:"90%",

 }
 export const style3 ={
     width:"200px",
     height:"200px",

 }
 export const styleh4={
    
    fontSize:"120%",
    color:"gray"
 }
 export const stylepara= {
     color:"gray",
     fontSize:"90%"
 }
export const styleprice = {
     color:"red",
 }
 export const styleh1={
     fontSize:"150%"
 }
const SapleProd = (url)=>{
       const [state,setState] = useState([])
       useEffect(()=>{
           let data=  async()=>{
                let data = await GetData(url.url)
                setState(data)
            }
            data()
       },[])

      

    let navigate = useNavigate()
       let handleClick2 = ()=>{
         navigate("/productpage")
       }
    return (
        <>
          <h1 style={styleh1}>Trending Now</h1>
          <div style={stylecont}>
            {
                state.map(ele=><Link to={`/productpage/${ele.id}`} style={style2} key={ele.id}> <div>
                    <Img style3={style3} src={ele.image}/> <h4 style={styleh4}>{ele.title}</h4>
                    <p style={stylepara}>{ele.para}</p>
                    <p style={styleprice}>$ {ele.price}</p>
                </div>
                </Link> )
            }
          </div>
          <button onClick={()=>handleClick2()}>Shop More</button>
        </>
    )

}
export default SapleProd