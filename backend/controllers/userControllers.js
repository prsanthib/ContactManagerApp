const express = require('express');
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler');
const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const validationToken = require('../middleware/validationHandler')

const registerUser = asyncHandler( async (req,res)=>{
    
    const {username , email , password} = req.body;

    if(!username || !email || !password)
    {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const mail = await User.findOne({email});
    if(mail)
    {
        res.status(400);
        throw new Error("Email already registered");
    }

    const hashedpass = await bcrypt.hash(password,10);
    const user = await User.create({username , email , password:hashedpass}); 

    res.status(200).json({id:user._id , email:user.email , name :user.username});

});

const loginUser = asyncHandler( async (req,res)=>{

    const {email , password} = req.body;
    const user = await User.findOne({email});
    if(!user)
    {
        res.status(400);
        throw new Error("Email is not registered");
    }

    const compare = await bcrypt.compare(password,user.password);
    if(!compare)
    {
        res.status(400);
        throw new Error("Incorrect Password");
    }

    const payload = {
        username:user.username,
        email:user.email,
        id:user.id
    }

    const accessToken = jwt.sign({payload}
        ,process.env.JWT_SECRET,
        {expiresIn:'15m'});

    res.status(200).json({accessToken});

});

const currUser = asyncHandler(async(req,res)=>{
    res.status(200).json(req.user);
});

module.exports = {registerUser,loginUser , currUser};