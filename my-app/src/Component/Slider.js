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
            const users = await GetData(url.url);
            setData(users);
          })();
    
    },[])
    const style = {

      height:"400px",
      width:"85%",
      margin:"auto",
      marginTop:"5%"

  }


    return (
      <div style={style} className="slide-container">
        <Slide>
        {/* <Zoom> */}
        {/* <Fade> */}
         {data.map((slideImage)=> (
        
          
                <Slidepic key={slideImage.id} className="each-slide" src={slideImage.image} />
          
         
          ))} 
          {/* </Fade> */}
          {/* </Zoom> */}
        </Slide>
      </div>
    )

}
export default Slider