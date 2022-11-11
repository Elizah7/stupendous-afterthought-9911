import React from "react"
const Slidepic = ({src,className})=>{
const style={
     height:"100%",
     width:"100%",
     margin:"auto"
}
const style2 = {

    height:"400px",
    width:"90%",
    margin:"auto",

}
    return <>
    <div style={style2} className={className}>
    <img style={style} src={src} alt=""/>
    </div>
    
    </>
    
}
export default Slidepic