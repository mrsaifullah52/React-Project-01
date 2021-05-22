import React from 'react';
import {NavLink} from "react-router-dom";

const Error404 =()=>{
  return(
    <div className="text-center py-5">
      <h1 className="my-5">404|Opps Page not Found</h1>
      <NavLink className="btn" to="/">Return to Home</NavLink>
    </div>
  )
}

export default Error404;