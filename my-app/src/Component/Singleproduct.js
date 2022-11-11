import React from "react"
import { useParams } from "react-router-dom"
import {useState,useEffect} from "react"
import { GetData } from "./Getdata"
const SingleProduct = ()=>{

    const params = useParams()
   
    const [state,setState] = useState([])
    useEffect(()=>{
         let data = async()=>{
             let res = await GetData(`http://`)
             console.log(res)
         }
         data()
    },[])

    return (
        <>
          <h1></h1>
        </>
    )

}
export default SingleProduct