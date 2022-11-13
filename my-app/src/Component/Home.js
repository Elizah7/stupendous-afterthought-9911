import React from "react"
import Slider from "./Slider"
import Menu from "./Menu"
import Para from "./Para"
import SapleProd from "./SampleProd"
import { useContext } from "react"
import { Apicontext } from "../Auth/Context"


const Home = ()=>{
    const {isAuth} = useContext(Apicontext)
    console.log(isAuth)
    return(
        <>
        <Slider url="http://localhost:8080/slidedatahome" />
         <Para/>
         <Menu/>
         <SapleProd navi={"/productpage"} url ="http://localhost:8080/homedata?_limit=4"/>
        </>
    )
}
export default Home