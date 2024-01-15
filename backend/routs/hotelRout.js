import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotelById, updateHotel } from "../Controllers/hotelContollers.js"

const router = express.Router()

// create hotell
router.post("/",createHotel)
// update hotel
router.put("/:id",updateHotel) 
// getting all hotels
router.get("/",getAllHotels)
// get hotel by id
router.get("/:id",getHotelById)
// delete hotel by id
router.delete("/:id",deleteHotel) 

export default router
