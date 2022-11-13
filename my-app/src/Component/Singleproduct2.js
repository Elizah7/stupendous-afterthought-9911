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
             let res = await GetData(`http://localhost:8080/kidsdata?id=${id}`)
             setState(res)
         }
         data()
    },[])

    return (
        <div>
              {
                state.map(ele=> <h2>{ele.title}</h2>)
              }
        </div>
    )

}
export default SingleProduct