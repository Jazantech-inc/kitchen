const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()
const app = express();
app.use(cors());
// Use express.json() middleware to handle JSON payloads
// Increase the limit as needed
// pars json data
app.use(express.json({ limit: "10mb" }));
// parse form data also
app.use(express.urlencoded({extended:false,limit:"10mb"})) 
require("./config/dbConfig")

const userRoute = require("./routes/userRoutes")
const recipeRoute = require("./routes/recipeRoutes")

app.use("/api/users/",userRoute);
app.use("/api/recipes",recipeRoute);




const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })