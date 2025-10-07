// require ('dotenv') .config({ path: './env'})

import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { log } from "console";

dotenv.config({
    path:'./env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : $ {process.env.PORT}`);
        
    })
})
.catch((err) => {
console.log("MONGO db connecttion failed" , err);

})