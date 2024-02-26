import express from "express";
import dbConnect from "./DbConnect/db.js";
import dotenv from "dotenv"
import hotelRoute from "./routs/hotelRout.js";
import userAuth from "./routs/auth.js";
import room from "./routs/roomRout.js"

dbConnect()
dotenv.config()
const app = express()
app.use(express.json())
//meddleware
app.use("/api/hotel",hotelRoute)
app.use("/api/auth",userAuth)
app.use("/api/room",room)


app.listen(8000,()=>{
console.log("server is runing on port 8000")
})