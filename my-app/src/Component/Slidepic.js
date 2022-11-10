import React from "react"
const Slidepic = ({src,className})=>{
const style={
     height:"100%",
     width:"100%",
     
}
    return <>
    <div className={className}>
    <img style={style} src={src} alt=""/>
    </div>
    
    </>
    
}
export default Slidepic