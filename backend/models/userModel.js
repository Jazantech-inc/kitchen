const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        username:{
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique:true,
            trim: true
        },
        phone:{
            type: Number,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        repeatpassword:{
            type: String,
            required: true
        },
        role: {
            type: String,
            default: "user"
        },
        status: {
            type: String,
            default: "non-active"
        },
        ProfilePicture: {
            type: String,
            default: ""
        },
        dateofbirth:{
            type: String,
        },
        gender:{
            type: String,
            required:true
        },

    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
