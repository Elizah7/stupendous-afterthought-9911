
import React from "react"
import { useState,useEffect } from "react"
import { GetData } from "./Getdata"
const Productpage = ()=>{
  const [state,useState] = useState([])

  useEffect(()=>{
         
    let data = async()=>{
         let getdata = await GetData(url)
         console.log(getdata)
    }
    data()
  },[])
    return(
        <>
          <h1>hi Productpage</h1>
        </>
    )
}
export default Productpage