import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

// images
import loginimg from '../images/key.svg';
const Login = ()=>{
  const [user,setUser]=useState({
    email: "",
    password: ""
  });

  const inputHandler=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }

  const formSubmision = async (e)=>{
    e.preventDefault();
    
    const {email,password}=user;

    const res=await fetch("/signin",{
      headers:{"Content-Type":"application/json"},
      method:"POST",
      body: JSON.stringify({
        email, password
      })      
    });

    const data=await res.json();
    console.log(data);
  }
  return(
    <>
    <div className="container">

        <h1 className="text-center my-4">Sign into your Account</h1>

        <div className="login">

        <div className="">
          <figure>
            <img src={loginimg} alt="registerimg" />
            <span>Not Registered? <NavLink to="/register">Sign Up</NavLink></span>
          </figure>
        </div>

        <form method="POST">

          <div className="input-group p-0 mb-3 col-5">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><EmailIcon/></span>
              </div>
              <input type="email" className="form-control" placeholder="Enter Email" aria-label="Full Name" aria-describedby="basic-addon1"
                      name="email" value={user.email} onChange={inputHandler}/>
          </div>

          <div className="input-group p-0 mb-3 col-5">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><LockIcon/></span>
              </div>
              <input type="password" className="form-control" placeholder="Enter Password" aria-label="Enter Password" aria-describedby="basic-addon1"
                      name="password" value={user.password} onChange={inputHandler}/>
          </div>

          <div className="input-group p-0 mb-3 col-5">
              <input type="button" onClick={formSubmision} className="form-control btn-primary text-white btn"  value="Login"/>
          </div>
        </form>
      </div>

      </div>
    </>
  );
}
export default Login;