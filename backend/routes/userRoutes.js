const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");
const Joi = require("joi");
const { joiPasswordExtendCore } = require("joi-password");
const joiPassword = Joi.extend(joiPasswordExtendCore);

const secret = process.env.jwt_secret_key;

const signupSchema = Joi.object().keys({
    firstname: Joi.string().lowercase().trim(true).required(),
    lastname: Joi.string().lowercase().trim(true).required(),
    username: Joi.string().alphanum().min(6).max(20).trim(true).required(),
    email: Joi.string().email().required(),
    phone: Joi.number().required(),
    password: joiPassword
        .string()
        .min(8)
        .max(20)
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .noWhiteSpaces()
        .onlyLatinCharacters()
        .messages({
            "password.minOfUppercase":
                "{#label} should contain at least {#min} uppercase character",
            "password.minOfSpecialCharacters":
                "{#label} should contain at least {#min} special character",
            "password.minOfLowercase":
                "{#label} should contain at least {#min} lowercase character",
            "password.minOfNumeric":
                "{#label} should contain at least {#min} numeric character",
            "password.noWhiteSpaces": "{#label} should not contain white spaces",
            "password.onlyLatinCharacters":
                "{#label} should contain only latin characters",
            "password.min": "{#label} should contain at least {#min} characters",
            "password.max": "{#label} should contain at least {#max} characters",
        })
        .required(),
    repeatpassword: Joi.ref("password"),
    // dateofbirth: Joi.string().required(),
    gender: Joi.string().required(),
});

// user signup here
router.post("/signup", async (req, res) => {
    try {
        // Validate user input against the schema
        const value = await signupSchema.validateAsync(req.body, {
            abortEarly: false,
        });
        // check if user already exists
        const user = await User.findOne({
            $or: [{ email: value.email }, { username: value.username }],
        });
        if (user) {
            throw new Error("User already exists");
        }
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(value.password, salt);
        value.password = hashPassword;
        value.repeatpassword = hashPassword;
        // Create new User / save User
        const newUser = new User(value);
        await newUser.save();
        /* send response */
        res.send({
            success: true,
            message: "New user account created successfully!!" + value.firstname,
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
            error: error.details,
        });
    }
});

// user login here
router.post("/login", async (req, res) => {
    try {
        // check if user exist or not
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            throw new Error("User not found");
        }
        // compare password
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword) {
            throw new Error("Invalid Password");
        }
        // create & assign token
        const token = jwt.sign({ userId: user._id }, secret, { expiresIn: "1d" });
        /* send response */
        res.json({
            success: true,
            message: "Login successfully!!",
            token: token,
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});

// fetch current user who login
router.get("/fetchCurrentUser", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user);
        /* send response */
        res.send({
            success: true,
            data: user,
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});

module.exports = router;
