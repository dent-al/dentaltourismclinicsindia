const express= require("express")
const app=express();
const env =require("dotenv");
const cors = require("cors");
const database = require('./Config/db');
const Router=require("./Routes/routes");

env.config();
const PORT= process.env.PORT||3000




app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api",Router)






app.listen(PORT,()=>{
           database();
    console.log(`Server is connected Succesfully ${PORT}`)

})


