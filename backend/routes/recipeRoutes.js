const router = require("express").Router();
const Recipe = require("../models/recipemodel");
const authMiddleware = require("../middlewares/authMiddleware");
const multer = require("multer");
const cloudinary = require("../config/cloudinaryConfig");
const path = require("path");

/* get image from computer */
const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, Date.now().toString() + path.extname(file.originalname));
    },
});
const upload = multer({ storage: storage });
// add new Recipe
router.post(
    "/addRecipe",
    authMiddleware,
    // upload.array("images"),
    async (req, res) => {
        try {
            // cloudinary.api.create_folder(`recipeImages/${req.body.recipename}`).then(data=>console.log(data));
            /*  handling image uploading into cloudinary
                                is responsible for uploading multiple images to the cloudinary server and returning an array of secure URLs for the uploaded images. */
            // let number = 0;
            // const imageUrls = await Promise.all(
            //     req.files.map(async (file) => {
            //         const result = await cloudinary.uploader.upload(file.path, {
            //             use_filename: true,
            //             overwrite: true,
            //             // access_mode: "authenticated",
            //             folder: `${req.body.recipename}`,
            //             resource_type: "image",
            //             public_id: `${req.body.recipename}-${number++}`,
            //             quality_analysis: true,
            //         });
            //         return result.secure_url;
            //     })
            // );
            const newRecipe = new Recipe({
                ...req.body,
                // images: imageUrls,
            });
            await newRecipe.save();

            res.send({
                success: true,
                message: "New Recipe add successfully",
                newRecipe,
            });
        } catch (error) {
            res.send({
                success: false,
                message: error.message,
            });
        }
    }
);

// fetch all products
router.get("/fetchRecipes", authMiddleware, async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.send({
            success: true,
            recipes,
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});

// update the existing recipe by id

router.put("/updateRecipe/:id/:recipename", authMiddleware,upload.array("images"), async (req, res) => {
    try {

         // Delete existing images from Cloudinary

        await cloudinary.api.delete_resources_by_prefix(`${req.params.recipename}/`, {
            resource_type: "image",
        });

        let number = 0;
        const imageUrls = await Promise.all(
            req.files.map(async (file) => {
                const result = await cloudinary.uploader.upload(file.path, {
                    use_filename: true,
                    overwrite: true,
                    folder: `${req.body.recipename}`,
                    resource_type: "image",
                    public_id: `${req.body.recipename}-${number++}`,
                    quality_analysis: true,
                });
                return result.secure_url;
            })
        );



        // Find the recipe by ID and update it
        await Recipe.findByIdAndUpdate(req.params.id,{...req.body,images:imageUrls}, { new: true });
        res.send({
            success: true,
            message: "Recipe update successfully",
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});

// delete the exisiting product by id

router.delete(
    "/deleteRecipe/:id/:recipename",
    authMiddleware,
    async (req, res) => {
        try {
           await cloudinary.api.delete_resources_by_prefix(`${req.params.recipename}/`, {
                    resource_type: "image",
                })
            await cloudinary.api.delete_folder(`${req.params.recipename}`).then(result=>console.log(result))
            await Recipe.findByIdAndDelete(req.params.id);
            res.send({
                success: true,
                message: "Recipe deleted successfully",
            });
        } catch (error) {
            res.send({
                success: false,
                message: error.message,
            });
        }
    }
);

module.exports = router;
