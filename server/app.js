const express = require('express');
const app = express();
const dotenv=require('dotenv');
 
dotenv.config( {path: './config.env'} );

// mongodb
require('./db/conn.js');
// user schema(Model)
// const User = require('./model/userSchema');

// Server Port
const PORT = process.env.PORT;

// router
app.use(express.json());
app.use(require('./router/auth'));

// middlerware
// const middlerware=(req,res,next)=>{
//   console.log("runnning middleware");
//   next();
// }

// default homepage
// app.get('/', middlerware, (req,res)=>{
//   res.send("Hello Saif Ullah");
//   // console.log("default route");
// });

// listening port
app.listen(PORT,()=>{
  console.log(`Listening port ${PORT}`);
});


module.exports = app