var express = require('express');
const route=express.Router();
var CryptoJS = require("crypto-js");
const User=require("../models/User");
const jwt=require("jsonwebtoken");

route.post("/register",async (req,res)=>{
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    console.log(newUser)
    try{
        const user=await newUser.save();
        res.status(200).json(user);
    }catch(e){
        console.log(e)
    }
    
})

//LOGIN
route.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(401).json("Tài khoản hoặc mật khẩu sai!");
      const isAdmin = user.isAdmin;
      const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
      console.log(isAdmin)
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
      originalPassword !== req.body.password &&
        res.status(401).json("Tài khoản hoặc mật khẩu sai!");
  
      const accessToken = jwt.sign(
        { id: user._id, isAdmin: isAdmin },
        process.env.SECRET_KEY,
        { expiresIn: "90d" }
      );
  
      const { password, ...info } = user._doc;
  
      res.status(200).json({ ...info, accessToken });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports=route;   