const express = require('express');
const router = express.Router();


require('../db/conn');
const User=require('../model/userSchema');

router.get("/",(req,res)=>{
  res.send("Hello from Home Page");
});

router.post("/register",(req,res)=>{
  // console.log(req.body);
  // res.json({message:req.body});


  const {name, email, phone, password, cpassword}= req.body;

  User.findOne({email: email})
      .then((exist)=>{
        if(exist){
          console.log("User Already Exist!!");
          return res.status(422).json({Error: "User Already Exist!!"});
        }else{
          const user = new User({name, email, phone, password, cpassword});
          user.save().then(()=>{
            console.log("User Registered!!");
            res.status(201).json({message: "User Registered Successfully!!"});
          }).catch((error)=>{
            console.log(error);
            res.status(500).json({message: "Failed to Registered!!"});
          });
        }


      })

});


module.exports = router;