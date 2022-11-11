
import React from "react"
import axios from "axios"
export const GetData = async(url) =>{

   let res = await fetch(url)
   let data = await res.json()
   return data
}