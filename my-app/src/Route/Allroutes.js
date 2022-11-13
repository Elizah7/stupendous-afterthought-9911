import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "../Component/Home"
import Men from "../Component/Men"
import Login from "../Component/Login"
import Kids from "../Component/Kids"
import Women from "../Component/Women"
import Productpage from "../Component/Productpage"
import Productpage2 from "../Component/Productpage2"
import Productpage3 from "../Component/Productpage3"
import Productpage4 from "../Component/Productpage4"
import Singleproduct from "../Component/Singleproduct"
import Singleproduct2 from "../Component/Singleproduct2"
import Singleproduct3 from "../Component/Singleproduct3"
import Singleproduct4 from "../Component/Singleproduct4"
import Signup from "../Component/Signup"
const Allroutes = ()=>{
  
    return (
        <>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/men" element={<Men/>}></Route>
            <Route path="/women" element={<Women/>}></Route>
            <Route path="/kids" element={<Kids/>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/productpage" element={<Productpage></Productpage>}></Route>
            <Route path="/productpage2" element={<Productpage2></Productpage2>}></Route>
            <Route path="/productpage3" element={<Productpage3></Productpage3>}></Route>
            <Route path="/productpage4" element={<Productpage4></Productpage4>}></Route>
            <Route path="/productpage/:id" element={<Singleproduct></Singleproduct>}></Route>
            <Route path="/productpage2/:id" element={<Singleproduct2></Singleproduct2>}></Route>
            <Route path="/productpage3/:id" element={<Singleproduct3></Singleproduct3>}></Route>
            <Route path="/productpage4/:id" element={<Singleproduct4></Singleproduct4>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
          </Routes>
 

        </>
    )

}
export default Allroutes