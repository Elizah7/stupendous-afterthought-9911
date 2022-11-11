import React from "react"
import Img from './Img'
import { useEffect, useState} from "react"
import { GetData } from "./Getdata"
import "../style/style.css"
import { useSearchParams } from "react-router-dom"
const Menu = ()=>{
    const [state,setState] = useState([])
    const id = useSearchParams()
    useEffect(()=>{
        
        let data = async()=>{
           let menudata = await GetData("http://localhost:8080/menudata")
           setState(menudata)
        }
        data()

    },[])
    const style = {
     
        width:"90%",
        margin:"auto"
    }
    return (
        <>
      
             <div className="menu-of-brand" style={style} >
                {
                  state.map(ele=> <Img key={ele.id} src={ele.image}/>)
                }
              
             </div>
 
        </>
    )

}
export default Menu