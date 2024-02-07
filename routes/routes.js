const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt'); //bcrypt is a library that hashes passwords
const router = express.Router() //router is a method in the express library that allows us to create routes

//user registration
router.post('/register',async(req,res)=>{
    try{
        const {username,password}=req.body;
        const hashpassword = await bcrypt.hash(password,10);
        const user = new User({username,password:hashpassword});
        const savedUser=await user.save();
        res.status(200).json({Registration : 'Success'}); 
    }
    catch (err){
        res.status(500).json({ err : 'You have an error'});

    }

})
//User login
router.post ('/login',async(req,res)=>{
    try{
    const {username,password}=req.body;
    const user = User.foundOne({username});
    if (!user){
        res.status(500).json({Failed:'The login is field'})

    }
    const passsword = req.body;
    await bcrypt.compare(passsword,user.password);
    if(!passsword){
        res.status(500).json({Failed:'The login is field'})
    }

        
    }
    catch (err){
        res.status(500).json({ err : 'You have an error'});

    }
    const token = jwt.sign({userId:id},secret_pass,{expiresIn:'1h'}); //this is the token that will be used to authenticate the user
   try{
    res.status(200).json({token});}
    catch(err){
        res.status(500).json({ err : 'You have an error'});
    }
    
})
module.export = router
