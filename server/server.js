const dotenv=require('dotenv');
const express = require('express');
const app = express();


dotenv.config( {path: './config.env'} );

require('./DB/conn.js');
const PORT = process.env.PORT;


// middlerware
const middlerware=(req,res,next)=>{
  console.log("runnning middleware");
  next();
}

// default homepage
app.get('/', middlerware, (req,res)=>{
  res.send("Hello Saif Ullah");
  console.log("default route");
});

// listening port
app.listen(PORT,()=>{
  console.log(`Listening port ${PORT}`);
});