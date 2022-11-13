import React from "react";
import { createContext, useState } from "react";


export const Apicontext = createContext()

const ApiContextProvider = ({children})=>{
      const [isAuth,setIsauth] =useState(false)
    
       const loginuser = ()=>{
               setIsauth(true)
       } 
       const logoutuser = ()=>{
            setIsauth(false)
       }
       console.log(isAuth)
       const value = {loginuser,isAuth,logoutuser}
       return (
        <>
        
        <Apicontext.Provider value={value}>
            {children}
        </Apicontext.Provider>
        </>
       )
}
export default ApiContextProvider