import React from "react";
import {Slide} from "react-slideshow-image"
import {useState,useEffect} from "react"
import 'react-slideshow-image/dist/styles.css'
import { GetData } from "./Getdata";

import Slidepic from "./Slidepic";

const Slider = (url)=>{
  const [data,setData]  = useState([]);
     
    useEffect(()=>{
        (async () => {
            const users = await GetData(url);
            setData(users);
          })();
    
    },[])
    const style = {

      height:"400px",
      width:"90%",
      margin:"auto"  ,

  }
  const style2 = {
    
    height:"400px",
    width:"100%",
    margin:"auto",

}

    return (
      <div style={style} className="slide-container">
        <Slide>
        {/* <Zoom> */}
        {/* <Fade> */}
         {data.map((slideImage, index)=> (
        
            <div style={style2} className="each-slide" key={index}>
                <Slidepic src={slideImage.image} />
          
            </div>
          ))} 
          {/* </Fade> */}
          {/* </Zoom> */}
        </Slide>
      </div>
    )

}
export default Slider