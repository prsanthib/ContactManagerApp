const express = require('express');
const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler( async (req,res)=>{
    
    res.status(200).json("User registered successfully");

});

const loginUser = asyncHandler( async (req,res)=>{

    res.status(200).json("User loggedin successfully");

});

const currUser = asyncHandler(async(req,res)=>{

    res.status(200).json("current user details showed successfully");

});

module.exports = {registerUser,loginUser , currUser};