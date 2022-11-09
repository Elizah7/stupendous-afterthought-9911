import React from "react"
import {Routes, Route} from "react-router-dom"
import {Home,Login,Men,Women,Kids} from "../Component"

const Allroutes = ()=>{
  
    return (

        <>
          <Routes>
            <Route to="/" element={<Home></Home>}></Route>
            <Route to="/men" element={<Men></Men>}></Route>
            <Route to="/women" element={<Women></Women>}></Route>
            <Route to="/kids" element={<Kids></Kids>}></Route>
            <Route to="/login" element={<Login></Login>}></Route>
          </Routes>
        </>
    )

}
export default Allroutes