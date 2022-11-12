import { createContext, useState } from "react";
import { GetData } from "../Component/Getdata";

export const Apicontext = createContext()

const ApiContextProvider = ({children})=>{
      const getDataProd = async(url)=>{
          
        let  fetchedData = await GetData(url)
         console.log(fetchedData)
      }
    
       return (
        <>
        <Apicontext.Provider value={getDataProd}>
            {children}
        </Apicontext.Provider>
        </>
       )
}
export default ApiContextProvider