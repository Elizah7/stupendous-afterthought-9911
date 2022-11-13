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
             let res = await GetData(`http://localhost:8080/womendata?id=${id}`)
             console.log(res)
             setState(res)
         }
         data()
    },[])

    return (
        <>
        <div>
            <h1></h1>
            {
                state.map(ele=><h1>{ele.title}</h1>)
            }
           
        </div>
        
        </>
    )

}
export default SingleProduct