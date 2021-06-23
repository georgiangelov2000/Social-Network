const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/UserModel");

const async = require("async");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

router.post(
  "/register",
  [
    check("username", "Username is required!").not().isEmpty(),
    check("email", "Email is required!").isEmail(),
    check("password", "Password is required!").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      let user = await User.findOne({ email: email });

      //if user exists
      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists!" }] });
      }

      //Get Users gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      user = new User({
        username,
        email,
        avatar,
        password,
      });

      //encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      //Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
          user,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (error, token) => {
          if (error) throw error;
          res.json({ token, user });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error!");
    }
  }
);

router.post("/forgotpassword", (req, res, next) => {
  async.waterfall(
    [
      (done) => {
        crypto.randomBytes(20, (error, buffer) => {
          let token = buffer.toString("hex");
          done(error, token);
        });
      },
      (token, done) => {
        User.findOne({
          email: req.body.email,
        })
          .then((user) => {
            if (!user) {
              return res
                .status(400)
                .json("User does not exist with this email.");
            }
            user.resetPasswordToken = token;
            user.resetPasswordExpires = Date.now() + 1800000;

            user.save((error) => {
              done(error, token, user);
            });
          })
          .catch((error) => {
            console.error(error.message);
            res.status(500).send("Server error");
          });
      },
      (token, user) => {
        let smtpTransport = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD,
          },
        });
        let mailOptions = {
          to: user.email,
          from: "George Angelov georgebelozemeca@gmail.com",
          subject: "Recovery Email from Auth Project",
          text:
            "Please click the following link to recover your passoword: \n\n" +
            "http://" +
            req.headers.host +
            "/reset/" +
            token +
            "\n\n" +
            "If you did not request this, please ignore this email.",
        };
        // console.log(mailOptions.to);
        // console.log(mailOptions)
        smtpTransport.sendMail(mailOptions, (error) => {
          res
            .status(200)
            .send("Email send with further instructions. Please check that.");
        });
      },
    ],
    (error) => {
      if (error) return res.status(400).json(error);
    }
  );
});

module.exports = router;
