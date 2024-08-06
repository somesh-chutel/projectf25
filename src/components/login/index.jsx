import { useState } from "react";
import "./index.css";

const Login = () => {

    const [allValues,setValues] = useState({
        username : "",
        password : ""
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

        console.log(data);
        
    }

    const onChangeUserName = (e)=>{

        setValues({...allValues,username : e.target.value});

    }


    const onChangePassword = (e)=>{

        setValues({...allValues,password : e.target.value});
    }

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
      </form>
    </div>
  );
};

export default Login;
