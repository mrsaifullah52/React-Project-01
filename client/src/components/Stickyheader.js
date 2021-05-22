import React from 'react';
import {NavLink} from 'react-router-dom';
// material icon
import StoreIcon from '@material-ui/icons/Store';
import Search from '@material-ui/icons/Search';
import CompareIcon from '@material-ui/icons/Compare';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Stickyheader = ()=>{
  return(
    <>
    <div className="container-fluid bg-white stickyheader sticky-top shadow-sm">
      <div className="row justify-content-between align-items-center stickyheadercontent">
        <div className="col-md-3">
          <div className="brand" >
            <NavLink to="/">
              <StoreIcon fontSize="inherit"/>
              <span>Phone Ware House</span>
            </NavLink>
          </div>
        </div>

        <div className="col-md-7 stickyheaderform">
          <form method="GET">
            <input type="text" name="query"  
                placeholder="Search in Phone Ware House" className="bg-light p-2"/>
            <button type="button" className="btn-primary"><Search/></button>
          </form>
        </div>

        <div className="col-md-2 d-flex justify-content-between">
          <NavLink className="nav-link text-primary" to="/comparison/1/3" activeClassName="active">
            <div className="cartIcon">
              <CompareIcon/>
              <span id="items">3</span>
            </div>
          </NavLink>
          
          <NavLink className="nav-link text-primary" to="/cart" activeClassName="active">
            <div className="cartIcon">
              <AddShoppingCartIcon/>
              <span id="items">8</span>
            </div>
          </NavLink>

          <NavLink className="nav-link text-primary" to="/wishlist" activeClassName="active">
            <div className="cartIcon">
              <FavoriteIcon/>
              <span id="items">12</span>
            </div>
          </NavLink>
          
        </div>

      </div>
    </div>
    </>
  );
}
export default Stickyheader;