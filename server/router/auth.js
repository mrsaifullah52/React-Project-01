const express = require('express');
const router = express.Router();


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
  const {email, password}=req.body;
  
  const emailExist = await User.findOne({email: email.toLowerCase()});
  const passExist = await User.findOne({password: password});
  
  if(emailExist && passExist){
    res.json({email: email, password: password});
  }else{
    res.json({error: "User doesnt exist!!"});
  }



});


module.exports = router;