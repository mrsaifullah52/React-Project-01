import React from 'react';
import {NavLink} from 'react-router-dom';
// icons
import CompareIcon from '@material-ui/icons/Compare';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Product=(product)=>{
  return(
    <>
      <div className="card m-1 singleproduct">
        <img className="card-img-top" src={product.item.image} alt={product.item.name}/>
        <div className="card-body">
          <NavLink to={"viewproducts/"+product.item.id}>
            <h6 className="card-title">{product.item.name}</h6>
          </NavLink>
          <small className="text-muted">Rs. {product.item.price.toLocaleString()}</small>
          <div className="actions">
            <div className="top">
              <button><CompareIcon style={{fontSize: "12px"}}/>Compare</button>
              <button><FavoriteIcon style={{fontSize: "12px"}}/>Wishlist</button>
            </div>
            <button className="btn btn-primary"><AddShoppingCartIcon style={{fontSize: "14px"}}/>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;