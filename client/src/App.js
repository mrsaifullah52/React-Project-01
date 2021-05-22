import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// router
import {Switch, Route} from 'react-router-dom';
// components
import Home from './components/Home';
import Products from './components/Products';
import Wishlist from './components/Wishlist';
import Comparison from './components/Comparison';
import Trackorder from './components/Trackorder';
import Storelocation from './components/Storelocation';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Stickyheader from './components/Stickyheader';
import Viewproducts from './components/Viewproducts';
import Category from './components/Category';
import Error404 from './components/Error404';
const App = ()=>{
  return(
    <div>

      <Navbar/>
      <Stickyheader/>
      <Switch>

        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/store-location" exact>
          <Storelocation/>
        </Route>

        <Route path="/track-order" exact>
          <Trackorder/>
        </Route>

        <Route path="/cart" exact>
          <Cart/>
        </Route>

        <Route path="/login" exact>
          <Login/>
        </Route>
        
        <Route path="/register" exact>
          <Register/>
        </Route>
        
        <Route path="/wishlist" exact>
          <Wishlist/>
        </Route>
        
        <Route path="/comparison/:first/:second" exact>
          <Comparison/>
        </Route>

        <Route path="/viewproducts/:pid" exact>
          <Viewproducts/>
        </Route>

        <Route path="/category/:category" exact>
          <Category/>
        </Route>
        
        <Route path="/*">
          <Error404/>
        </Route>
      </Switch>
    </div>
  );
}
export default App;