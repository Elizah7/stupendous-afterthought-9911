import React from "react"
import Slider from "./Slider"
import Para from "./Para"
import SapleProd from "./SampleProd"
import Menu from "./Menu"
const Men = ()=>{

    return(
        <>
      <Slider url="http://localhost:8080/slidedatamen"/>
       <Para/>
       <Menu/>
       <SapleProd url ="http://localhost:8080/mendata?_limit=4"/>
        </>
     
    )
}
export default Men