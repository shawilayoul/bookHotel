import express from "express";
import dbConnect from "./DbConnect/db.js";
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import hotelRoute from "./routs/hotelRout.js";
import userAuth from "./routs/auth.js";
import room from "./routs/roomRout.js";
import user from "./routs/user.js"

dbConnect()
dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())
//meddleware
app.use("/api/hotel",hotelRoute)
app.use("/api/auth",userAuth)
app.use("/api/room",room)
app.use("/api/user",user)


app.listen(8000,()=>{
console.log("server is runing on port 8000")
})