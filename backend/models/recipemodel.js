const mongoose = require("mongoose");

const recipeScheme = new mongoose.Schema(
    {
        recipename: {
            type: String,
            required: true,
        },
        dishtype: {
            type: String,
        },
        preparationtime: {
            type: String,
            required: true,
        },
        serving: {
            type: Number,
            required: true,
        },
        cookingtime: {
            type: String,
            required: true,
        },
        shelf: {
            type: Number,
            required: true,
        },
        difficulty: {
            type: String,
            required: true,
        },
        images: {
            type: Array,
            default: [],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("recipes", recipeScheme);
