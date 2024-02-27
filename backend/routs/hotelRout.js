import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotelById, updateHotel } from "../Controllers/hotelContollers.js"
import {verifyAdmin} from "../middleware/authMiddleWare.js"

const router = express.Router()

// create hotell
router.post("/",verifyAdmin,createHotel)
// update hotel
router.put("/:id",verifyAdmin,updateHotel) 
// getting all hotels
router.get("/hotels",getAllHotels)
// get hotel by id
router.get("/:id",getHotelById)
// delete hotel by id
router.delete("/:id",verifyAdmin,deleteHotel) 

export default router
