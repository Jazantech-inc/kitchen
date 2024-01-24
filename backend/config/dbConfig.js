const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URI)
const conn = mongoose.connection;
conn.on("connected",()=>{
    console.log("Connected to MongoDB");
});
conn.on("error",(err)=>{
    console.log("Mongodb Connection Failed",err);
});

module.exports=conn;
