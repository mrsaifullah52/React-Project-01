const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  phone:{
    type: Number,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  cpassword:{
    type: String,
    required: true
  },
});


userSchema.pre("save", async function(next){

  if(this.isModified('password')){
    this.password=await bcrypt.hash(this.password, 10);
    this.cpassword=await bcrypt.hash(this.cpassword, 10);
  }

  if(this.isModified('email')){
    this.email=this.email.toLowerCase()
  }

  next();
});

const User = mongoose.model('USERS', userSchema);

module.exports = User;