import React from 'react';
import {NavLink} from "react-router-dom";

// icons
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Wishlist = ()=>{
  return(
    <>
    <div className="container">
      {/* <h1 className="text-center my-4">Wish List</h1> */}
      <ul className="wishlist mt-4">
        <Product/>
      </ul>
    </div>
    </>
  );
}

const Product=(item)=>{
  return(
    <li className="product">
      <span className="img">
        <img src="https://www.whatmobile.com.pk/admin/images/Oppo/OppoF19-b.jpg" alt="title" />
      </span>
      <span className="title">
        Oppo F19
      </span>
      <span className="price">
        Price: Rs. 39,999
      </span>
      <span className="status">
        In Stock
      </span>
      <span className="view">
        <NavLink className="nav-link btn" to="/wishlist">View</NavLink>
      </span>
      <span className="remove">
        <button type="button" className="btn text-danger"><DeleteForeverIcon/></button>
      </span>
    </li>
  )
}

export default Wishlist;