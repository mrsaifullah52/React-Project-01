import React from 'react';

import {NavLink} from "react-router-dom";

// icons
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
  

// fetch(path.normalize(__dirname,"Products.json"))
//     .then((res) => res.json())
//     .then((data) => {
//       console.log('data:', data);
//     })
//     .catch(err=> console.log(err));


const Cart = (items)=>{
  return(
    <>
    <div className="container">
      {/* <h1 className="text-center my-4">Shopping Cart</h1> */}
      <div className="shoppingcart mt-4">
        <div className="productlist">
          <CartProduct/>
          <CartProduct/>
        </div>
        <div className="ordersummary">
          <OrderSummary/>
        </div>
      </div>
    </div>
    </>
  );
}

const CartProduct=(item)=>{
  return(
    <>
      <div className="product">
        <span className="img">
          <img src="https://www.whatmobile.com.pk/admin/images/Oppo/OppoF19-b.jpg" alt="title" />
        </span>
        <span className="title">
          Oppo F19
        </span>
        <span className="price">
          Price: Rs. 39,999
        </span>
        <span className="qty">
          <form >
            <button type="button"  id="minus" className="btn-primary"><RemoveIcon/></button>
            <input type="number" className="text-primary" placeholder="1" name="count"/>
            <button type="button" id="plus" className="btn-primary"><AddIcon/></button>
          </form>
        </span>
        <span className="subtotal">
          Sub Total: Rs. 39,999
        </span>
        <span className="remove">
          <button type="button" className="btn text-danger"><DeleteForeverIcon/></button>
        </span>
      </div>
    </>
  )
}

const OrderSummary=()=>{
  return(
    <>
      <span className="subtotal">
        Sub Total: Rs. 79,998
      </span>
      <span className="tax">
        Tax: Rs. 785
      </span>
      <span className="total">
        Grand Total: Rs. 80,783<br/>
        <NavLink className="btn btn-primary d-block my-1" to="/cart">Checkout</NavLink>
      </span>
    </>
  )
}

export default Cart;