import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Apicontext } from "../Auth/Context";
import { useContext } from "react";

const Login =()=>{
     const userdata = {
        email:"",
        password:""
     }

     const {loginuser} = useContext(Apicontext)
     let regester = JSON.parse(localStorage.getItem("userdata"))||[] 
     const [data,setData] =useState(userdata)
     const navigate = useNavigate()
    const handleChange = (e)=>{
        
          const {name,value} = e.target
          setData({...data, [name]: value})
         
    }
  
    const handleSubmit = (e)=>{
           console.log(data.email,data.password)
            if(checkEmail(data)){
                 alert("welcome to walfam")
                 loginuser()
                 navigate("/")
                
            }
            else {
                 alert("email or password is incorret")
                
            }
          
     
          
    }

    const checkEmail = (data)=>{
     
         let  newData = regester.filter(ele=> ele.email==data.email && ele.password==data.password)
        
        
           if(newData.length>0){
              return true
           }
           else{
              return false
           }
    }
    
     return (

           <div> 
            
             <form className="form" onSubmit={()=>handleSubmit()}>
                   <h2>Login</h2>
                   <input  required onChange={handleChange} name="email" type="email" placeholder="Enter your email"/>
                   <input required onChange={handleChange} name="password" type="password" placeholder="Enter your password"/>
                   <input className="submit" type="submit"/> <p>Don't have an account <Link to="/signup">Create one</Link></p>
             </form>
           </div>
        )

}
export default Login