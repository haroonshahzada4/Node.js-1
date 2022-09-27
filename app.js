require("dotenv").config({ path: '.env' });
require("./config/database").connect();

const User = require("./model/user");
const Profile= require("./model/profile");

const express = require("express");
const app = express();
app.use(express.json());


const database = require("./config/database");
const jwt = require("jsonwebtoken");

const bodyparser = require("body-parser");
const profile = require("./model/profile");
const user = require("./model/user");



app.post ("/register",async(req,res)=>{
    try{
    const{user_id,customer,Address,Access}=req.body;
    const {Name,email,password}=req.body
    if(!(Name&&email&&password)){
    res.status(400).send("all needed");
    }
    const user = await User.findOne({email});
        if(user){
            res.status(400).send("user is already");
        }
        else{
        const user = await new User({
            Name,
            email,
            password,
        })
        const profile=await new User({
            user_id,
            customer,
            Address,
            Access,
        });


        const token =jwt.sign({_id:user._id,email},('privatekey'))
        user.token=token;
    
        await user.save();
        await profile.save();
        res.status(200).send(profile);
    }
    }catch(error){
        console.log(error);
    }
});



// app.post("/profile",async(req,res)=>{
// try{
//     const {user_id,customer,Address,Access}= req.body;
    
// const info= await user.findOne({customer});   
// if(info){
//     const info = await User.create({
//         user_id,
//         customer,
//         Address,
//         Access,
//     });
// }else{
//     res.status(400).send("DONE");
// }
//     await info .save()
//     res.status(200).json(info);
// }
// catch(error){
//     console.log(error)
// }
// })




app.post("/product",async(req,res)=>{
    try{
    const{material,food,health}=req.body;
    
const things= await user.findOne({ material}); 
if(things){
    const things = await User.create({
        material,
        food,
        health,
    });
}else{
    res.status(400).send("NOTHING")
}
    await things.save()
    res.status(200).json(things)
  }catch(error){
        console.log(error);
    }

})

function verifyToken(req, res,next){
    const bearerHeader=req.headers['authorization']
if(typeof bearerHeader!=='undefined'){
    const bearerHeader= bearerHeader.split(' ')[1]
req.token= bearerToken
next()
}else{
    res.status(403);
}

}


module.exports=app





