import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup =()=>{
     const userdata = {
        name:"",
        number:"",
        email:"",
        password:""
     }
     let regesterddata = JSON.parse(localStorage.getItem("userdata"))||[] 
     const [data,setData] =useState(userdata)
     const nav = useNavigate()
    const handleChange = (e)=>{
        
          const {name,value} = e.target
          setData({...data, [name]: value})
         
    }
    const handleSubmit = (e)=>{
      
            if(checkEmail(data.email)){
                 alert("this account already exist")
               
            }
            else{
                 regesterddata.push(data)
                 localStorage.setItem("userdata", JSON.stringify(regesterddata))
                 alert("account created successfully")
                 nav("/login")
            }
            e.preventDefault();
    }

    const checkEmail = (email)=>{
          let newData = regesterddata.filter(ele=> ele.email==email)

           if(newData.length>0){
              return true
           }
           else{
              return false
           }
    }
    
     return (

           <> 
             <form className="form" onSubmit={()=>handleSubmit(data)}>
                <h2>Sign up</h2>
                   <input required onChange={handleChange} name="name" type="text" placeholder="Enter your name"/>
                   <input required onChange={handleChange} name="number" type="number" placeholder="Enter your mobile number"/>
                   <input required onChange={handleChange} name="email" type="email" placeholder="Enter your email"/>
                   <input required onChange={handleChange} name="password" type="password" placeholder="Enter your password"/>
                   <input required className="submit" type="Submit"/>
             </form>
           </>
        )

}
export default Signup