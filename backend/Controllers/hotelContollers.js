import Hotel from "../Models/hotelModel.js"
// creating hotel
export const createHotel = async(req,res)=>{
    const newHotel = await Hotel(req.body)
    try {
        const saveHotel = await newHotel.save()
       res.status(200).json(saveHotel) 
    } catch ( err) {
      res.status(500).json(err) 
    } 
}
//updat hotel
export const updateHotel = async(req,res)=>{
    try {
       const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body, new: true})
       res.status(200).json(updatedHotel) 
    } catch ( err) {
      res.status(500).json(err) 
    } 
  }
//get all hotel 
export const getAllHotels = async(req,res)=>{
    try {
        const saveHotel = await Hotel.find()
       res.status(200).json(saveHotel) 
    } catch ( err) {
      res.status(500).json(err) 
    } 
}
//get hotel by id
export const getHotelById = async(req,res)=>{
    try {
        const saveHotel = await Hotel.findById(req.params.id)
       res.status(200).json(saveHotel) 
    } catch ( err) {
      res.status(500).json(err) 
    } 
  }
export const deleteHotel = async(req,res)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
       res.status(200).json("the hotel deleted successfully") 
    } catch ( err) {
      res.status(500).json(err) 
    } 
  }