import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ProtectedRoute = (props)=>{

    const {Component} = props;
    const navigate = useNavigate();
    const token = Cookies.get("jwtToken"); 


    useEffect(()=>{

        if(token === undefined){

            navigate("/login");
        }

    },[])

    return(

        <Component/>

    )
}


export default ProtectedRoute;