

import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect } from 'react';



const  ProtectedRoute = (prop)=>{

    const {Component} = prop;
   
  const token = Cookies.get("jwtToken");
   
    const navigate = useNavigate();

    useEffect(()=>{
          if( token === undefined){
                navigate("/login");
          }
    },[]);
     
  




    return <Component/>


}

export default ProtectedRoute;