import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "../Component/Home"
import Men from "../Component/Men"
import Login from "../Component/Login"
import Kids from "../Component/Kids"
import Women from "../Component/Women"
const Allroutes = ()=>{
  
    return (
        <>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/men" element={<Men/>}></Route>
            <Route path="/women" element={<Women/>}></Route>
            <Route path="/kids" element={<Kids/>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
 

        </>
    )

}
export default Allroutes