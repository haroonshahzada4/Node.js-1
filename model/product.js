const mongoose = require("mongoose");
const express= require("express");

const productschema= new mongoose.Schema({
    material:{type:String},
    food:{type:String},
    health:{type:String},
})

module.exports =mongoose.model("product",productschema);