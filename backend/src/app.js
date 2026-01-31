const express = require('express');
const UserModel = require('../models/users.model');
const app=express()
app.use(express.json())

app.get('/',async(req,res)=>{
    const users=await UserModel.find()
    res.status(200).json({
        message:"welcome",
        users
    })
})

app.post('/createUser',async(req,res)=>{
    const {userName,age}=req.body
   const user=await UserModel.create({
        userName,age
    })
    res.status(201).json({
        message:'user created sucessfully',
        user
    })
})
app.delete('/userDelete/:id',async(req,res)=>{
    const {id}=req.params
    const delteUser=await UserModel.findByIdAndDelete(id)
    if(delteUser){
        res.status(200).json({
            message:"user delte",
            delteUser
        })
    }else{
        res.status(200).json({
            message:"user not find"
        })
    }
    
    
})
module.exports=app