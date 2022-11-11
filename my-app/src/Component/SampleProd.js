import React from "react";
import { useState,useEffect } from "react";
import { GetData } from "./Getdata";
import Img from "./Img";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const SapleProd = (url)=>{
       const [state,setState] = useState([])
       useEffect(()=>{
           let data=  async()=>{
                let data = await GetData(url.url)
                setState(data)
            }
            data()
       },[])

       const style={
          display:"flex",
         
          width:"90%",
          height:"400px",
          margin:"auto",
          marginTop:"5%",
          justifyContent:"space-between"
       }
       const style2={
            width:"20%",
            height:"100%"
       }
       const style3 ={
           width:"100%",
           height:"60%"
       }
       const styleh4={
          
          fontSize:"90%",
          color:"gray"
       }
       const stylepara= {
           color:"gray",
           fontSize:"70%"
       }
       const styleprice = {
           color:"red",
       }
       const styleh1={
           fontSize:"150%"
       }

    let navigate = useNavigate()
       let handleClick2 = ()=>{
         navigate("/productpage")
       }
    return (
        <>
          <h1 style={styleh1}>Trending Now</h1>
          <div className="main-container" style={style}>
            {
                state.map(ele=> <Link to={`/productpage/${ele.id}`}>  <div style={style2} key={ele.id}>
                    <Img style={style3} src={ele.image}/> <h4 style={styleh4}>{ele.title}</h4>
                    <p style={stylepara}>{ele.para}</p>
                    <p style={styleprice}>$ {ele.price}</p>
                </div> </Link>)
            }
          </div>
          <button onClick={()=>handleClick2()}>Shop More</button>
        </>
    )

}
export default SapleProd