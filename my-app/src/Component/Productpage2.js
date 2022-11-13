



import React from "react"
import { useState,useEffect } from "react"
import { GetData } from "./Getdata"
import { Link } from "react-router-dom"
import Img from "./Img"
import { style2,style3,styleh4,stylepara,styleprice } from "./SampleProd"
import Sidebar from "./Sidebar"
const Productpage2 = ()=>{
  const [state,setState] = useState([])

  useEffect(()=>{
         
    let data = async()=>{
         let getdata = await GetData("http://localhost:8080/kidsdata?_limit=20")
         setState(getdata)
        
    }
    data()
  },[])
    return(
        <>
        <Sidebar/>
        <div className="container">
            {
                state.map(ele=> <Link className="container-child"  to={`/productpage2/${ele.id}`} key={ele.id}>  <div >
                    <Img style={style3} src={ele.image}/> <h4 style={styleh4}>{ele.title}</h4>
                    <p style={stylepara}>{ele.para}</p>
                    <p style={styleprice}>$ {ele.price}</p>
                </div> </Link>)
            }
          </div>
       
        </>
    )
}
export default Productpage2