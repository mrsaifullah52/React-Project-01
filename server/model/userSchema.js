const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
  tokens:[
    {
      token:{
        type: String,
      }
    }
  ]
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

userSchema.methods.generateJWToken = async function(){
  try{
    let newToken = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({token: newToken});
    await this.save();
    return newToken;
  }catch(err){
    console.log(err);
  }
}


const User = mongoose.model('USERS', userSchema);
module.exports = User;