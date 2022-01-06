const express = require("express");

const router = express.Router();

const authenticate = require("../middlewares/authenticate");

const Post = require("../models/post.model");

router.get("",authenticate,async(req,res)=>{
    try{
        const posts= await Post.find().populate("user").lean().exac();
        res.status(200).send(posts);
    }catch(err){
        res.status(500).json({message: err.message,status:"Failed"});
    }
})

router.post("",authenticate,async(req,res)=>{
    try{
        const user = req.user;
    const post = await Post.create({
        title: req.body.title,
        body:req.body.body,
        user: user.user._id
    });
    res.status(201).send(post);
    }catch(err){
        res.status(500).json({message: err.message,status:"Failed"});
    }
    
})
module.exports = router;