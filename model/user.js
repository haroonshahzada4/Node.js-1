const mongoose =require("mongoose");
const express = require("express");

const userschema = new mongoose.Schema({
   user:{type:Object},
   Name:{type:String},
   email:{type:String},
   password:{type:String},
   token:{type:String},
});

module.exports=mongoose.model("user" ,userschema)