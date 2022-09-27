const mongoose =require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;


const profileschema= new Schema({
    profile_id:{type:Object},
    customer:{type:String},
    Address:{type:String},
    Access:{type:String},
});
module.exports =mongoose.model("profile" , profileschema);
