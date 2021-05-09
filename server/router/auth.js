const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('../db/conn');
const User=require('../model/userSchema');

router.get("/",(req,res)=>{
  res.send("Hello from Home Page");
});

router.post("/register", async (req,res)=>{

  const {name, email, phone, password, cpassword}= req.body;

  if(!name || !email || !phone || !password || !cpassword){
    return res.status(422).json({Error: "Some fields missing!!"});
  }else{
    const userExist =await User.findOne({email: email});
    if(userExist){
      console.log("User Already Exist!!");
      return res.status(422).json({Error: "User Already Exist!!"});
    }else{
      try{
        const user = new User({name, email, phone, password, cpassword});
        const userAdded = await user.save();
        if(userAdded){
          res.status(201).json({message: "User Registered Successfully!!"});
        }
      }catch(err){
        return res.status(422).json({Error: err+""});
      }
    }
  }
});


router.post("/login", async (req, res)=>{
  let token;
  const {email, password}=req.body;
  const userExist = await User.findOne({email: email.toLowerCase()});
  if(userExist){
    const isMatched = await bcrypt.compare(password, userExist.password);

    if(isMatched){

      token = await userExist.generateJWToken();
      console.log(token);
      res.cookie("UserJWT", token);
      res.json({success: "User Loged in Successfully"});
    }else{
      res.status(400).json({error: "Invalid Credientials!!"});
    }

  }else{
    res.status(400).json({error: "Invalid Credientials!!"});
  }
});


module.exports = router;