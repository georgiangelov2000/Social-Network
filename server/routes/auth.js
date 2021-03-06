const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth');
const jwt=require('jsonwebtoken');
const config=require('config');
const { check, validationResult } = require("express-validator");
const bcrypt=require('bcryptjs');
const User = require('../models/UserModel');

router.get('/',auth, async(req,res)=>{
    try {
        const user=await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

router.post(
    "/login",
    [
      check("email", "Email is required!").isEmail(),
      check("password", "Password is required!").exists()
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { email, password } = req.body;
  
      try {
        let user = await User.findOne({ email });
        //if user exists
        if (!user) {
         return res
         .status(400)
         .json({ errors: [{ msg: "Invalid Credentials!" }] });
        }
  
        const isMatch=await bcrypt.compare(password,user.password);
        // console.log(isMatch)

        if(!isMatch) {
            return res 
            .status(400)
            .json({errors:[{ msg: "Invalid Credentials!" }] });
        }

        //Return jsonwebtoken
        const payload = {
          user: {
            id: user.id,
            user
          },
        };
        //console.log(payload);

        jwt.sign(
          payload,
          config.get("jwtSecret"),
          { expiresIn: 360000 },
          (error, token) => {
            if (error) throw error;
            res.json({ token , user });
          }
        );
  
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error!");
      }
    }
  );

module.exports=router; 