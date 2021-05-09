import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// components
import Navbar from './components/Navbar';
const App = ()=>{
  return(

    <div className="container">

      <Navbar/>
      <h1>Hello Saif</h1>


    </div>
  );
}
export default App;