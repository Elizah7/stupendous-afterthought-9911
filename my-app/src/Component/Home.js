import React from "react"
import Slider from "./Slider"
import Menu from "./Menu"
import Para from "./Para"
import SapleProd from "./SampleProd"
const Home = ()=>{

    return(
        <>
        <Slider url="http://localhost:8080/slidedatahome" />
         <Para/>
         <Menu/>
         <SapleProd url ="http://localhost:8080/homedata?_limit=4"/>
        </>
    )
}
export default Home