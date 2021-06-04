const express=require("express");
const router=express.Router();
const { check, validationResult } = require("express-validator");
const auth=require("../middleware/auth");

const Post=require("../models/PostModel");
const User=require("../models/UserModel");
const Profile=require("../models/ProfileModel");

router.post("/",[
    auth,
    [
        check("text","Text is required").not().isEmpty()
    ],
], async(req,res)=>{

    const errors=validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array() });
    }

    try {

        const { text, name, avatar, user} = req.body;
        const user=await User.findById(req.user.id).select("-password"); 
        const newPost = {
            text,
            name,
            avatar,
            user
        }
        const post=await newPost.save();
        res.json(post);
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error")
    }


})