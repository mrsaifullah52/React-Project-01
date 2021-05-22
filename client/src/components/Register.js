import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LockIcon from '@material-ui/icons/Lock';

// images
import registerimg from '../images/working.svg';

const Register = ()=>{

  const [user,setUser]=useState({
    name:"", email:"", phone:"", password:"", cpassword:""
  });


  const inputHandler=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }

  const formSubmission = async (e)=>{
    e.preventDefault();

    const {name, email, phone, password, cpassword}=user;

    const res=await fetch("/signup",{
      headers:{"Content-Type":"application/json"},
      method:"POST",
      body: JSON.stringify({
        name, email, phone, password, cpassword
      })      
    });

    const data=await res.json();
    console.log(data);

  }

  return(
    <>
    <div className="container">

        <h1 className="text-center my-4">Create New Account</h1>

        <div className="registeration">

          <form method="POST">

            <div className="input-group p-0 mb-3 col-5">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1"><PersonIcon/></span>
                </div>
                <input type="text" className="form-control" placeholder="Enter Full Name" aria-label="Full Name" aria-describedby="basic-addon1" 
                        name="name" value={user.name} onChange={inputHandler}/>
            </div>

            <div className="input-group p-0 mb-3 col-5">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1"><EmailIcon/></span>
                </div>
                <input type="email" className="form-control" placeholder="Enter Email" aria-label="Full Name" aria-describedby="basic-addon1" 
                        name="email" value={user.email} onChange={inputHandler}/>
            </div>

            <div className="input-group p-0 mb-3 col-5">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1"><PhoneIcon/></span>
                </div>
                <input type="phone" className="form-control" placeholder="Enter Phone Number" aria-label="Enter Phone Number" aria-describedby="basic-addon1" 
                        name="phone" value={user.phone} onChange={inputHandler}/>
            </div>

            <div className="input-group p-0 mb-3 col-5">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1"><LockIcon/></span>
                </div>
                <input type="password" className="form-control" placeholder="Enter Password" aria-label="Enter Password" aria-describedby="basic-addon1" 
                        name="password" value={user.password} onChange={inputHandler}/>
            </div>

            <div className="input-group p-0 mb-3 col-5">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1"><LockIcon/></span>
                </div>
                <input type="password" className="form-control" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="basic-addon1" 
                        name="cpassword" value={user.cpassword} onChange={inputHandler}/>
            </div>

            <div className="input-group p-0 mb-3 col-5">
                <input type="button" onClick={formSubmission} className="form-control btn-primary text-white btn"  value="Register"/>
            </div>
          </form>

          <div className="">
          <figure>
            <img src={registerimg} alt="registerimg" />
            <span>Already Registered? <NavLink to="/login">Login</NavLink></span>
          </figure>
        </div>

        </div>

      </div>
    </>
  );
}
export default Register;