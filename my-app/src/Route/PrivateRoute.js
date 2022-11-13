

import { useContext } from "react";
import { Apicontext } from "../Auth/Context";
import { useNavigate } from "react-router-dom";
const {isAuth} = useContext(Apicontext)
const navi = useNavigate()
const PrivateRoute = ({children})=>{
   
    if(isAuth){
        return children
    }
    else{

        alert("first login")
        navi("/login")
    }
     
}

export default PrivateRoute

