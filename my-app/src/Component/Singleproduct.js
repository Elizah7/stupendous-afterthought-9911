import React from "react"
import { useParams } from "react-router-dom"
import {useState,useEffect} from "react"
import { GetData } from "./Getdata"
const SingleProduct = ()=>{

    const {id} = useParams()
   console.log(id)
    const [state,setState] = useState([])
    useEffect(()=>{
         let data = async()=>{
             let res = await GetData(`http://localhost:8080/homedata?id=${id}`)
             console.log(res)
         }
         data()
    },[])

    return (
        <>
          <h1>hi</h1>
        </>
    )

}
export default SingleProduct