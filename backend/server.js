const express = require('express');
const app = express();


// middlerware
const middlerware=(req,res,next)=>{
  console.log("runnning middleware");
  next();
}
// middlerware();


// default homepage
app.get('/', middlerware, (req,res)=>{
  res.send("Hello Saif Ullah");
  console.log("default route");
});

// listening port
app.listen(3000,()=>{
  console.log("Listening port 3000");
});