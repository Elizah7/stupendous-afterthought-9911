import React from "react"
import Slider from "./Slider"
import SapleProd from "./SampleProd"
import Menu from "./Menu"
import Para from "./Para"

const Kids = ()=>{

    return(
        <>
        <Slider url="http://localhost:8080/slidedatakids"/>
        <Para/>
        <Menu/>
        <SapleProd url ="http://localhost:8080/kidsdata?_limit=4"/>
        </>
     
    )
}
export default Kids