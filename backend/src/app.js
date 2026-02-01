const express= require("express");
const userModel = require("./model/user.model");
const cors = require('cors');
const app=express()
app.use(express.json())
app.use(cors())
//*  USER WILL GET DATA 
app.get('/api/user',async(req,res)=>{

    let users=await userModel.find()||[]
    res.status(200).json({
        message:"users  is fetched",
        users
    })
})
//* USER WILL CREATE USER NAME AND DATA 
app.post('/api/user',async(req,res)=>{
    const{userName,age}=req.body
    let user=await userModel.create({
        userName,age
    })
    res.status(201).json({
        message:"user is crated is sucessfule",
        user
    })
}) 



module.exports=app