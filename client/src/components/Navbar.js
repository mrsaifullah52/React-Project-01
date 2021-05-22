import React from 'react';
import {NavLink} from 'react-router-dom';
// material icons
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonIcon from '@material-ui/icons/Person';

const Navbar=()=>{
  return(
    <>
 
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
        <div className="container-fluid">
          <NavLink className="nav-link" to=""><PhoneIcon fontSize={"small"} />(+92) 300-1234567</NavLink>
          <NavLink className="nav-link" to=""><EmailIcon fontSize={"small"} />info@phonewarehouse.co.uk</NavLink>
              
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">

              <li className="nav-item">
                <NavLink className="nav-link" to="/store-location" activeClassName="active">
                  <LocationOnIcon fontSize={"small"}/>Store Location</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/track-order" activeClassName="active">
                  <FindReplaceIcon fontSize={"small"} />Track your Order</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" activeClassName="active">
                  <VpnKeyIcon fontSize={"small"}/>Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register" activeClassName="active">
                  <PersonIcon fontSize={"small"}/>Register</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;