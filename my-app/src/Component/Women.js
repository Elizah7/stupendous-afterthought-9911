import React from "react"
import Slider from "./Slider"
import SapleProd from "./SampleProd"
import Menu from "./Menu"
import Para from "./Para"
const Women = ()=>{

    return(
        <>
             <Slider url="http://localhost:8080/slidedatawomen"/>
               <Para/>
             <Menu/>
             <SapleProd navi= {"/productpage4"} url ="http://localhost:8080/womendata?_limit=4"/>
        </>
    
    )
}
export default Women