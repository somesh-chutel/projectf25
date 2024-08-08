import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import "./index.css";

const Login = () => {

  const navigate = useNavigate();

  const token = Cookies.get("jwtToken");

    const [allValues,setValues] = useState({
        username : "",
        password : "",
        errorMsg : "",
        showErrorMsg : false
    });

    const onSubmitUserDetails = async(e)=>{
        e.preventDefault();

        const api = "https://apis.ccbp.in/login";

        const userDetails = {
            username: allValues.username,
            password: allValues.password
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails)
        }

        const response = await fetch(api,options);
        const data = await response.json(); 

        if(response.ok === true){

          setValues({...allValues,showErrorMsg : false,errorMsg : ""});

          Cookies.set("jwtToken", data.jwt_token);


          navigate("/");

        }
        else{

          setValues({...allValues,showErrorMsg : true ,errorMsg : data.error_msg});

        }
        
    }

    const onChangeUserName = (e)=>{

        setValues({...allValues,username : e.target.value});

    }


    const onChangePassword = (e)=>{

        setValues({...allValues,password : e.target.value});
    }

    useEffect( ()=>{

        if( token !== undefined){

            navigate("/");

        }

    },[])

  return (
    <div className="login-cont">
      <form className="my-form" onSubmit={onSubmitUserDetails}>
        <div className="login-web-logo-cont">
        <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" className="w-25"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChangeUserName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChangePassword}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <br /><br /> 

        {allValues.showErrorMsg ? <p className="text-danger">{allValues.errorMsg}</p> : null}
      </form>
    </div>
  );
};

export default Login;
