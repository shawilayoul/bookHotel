import mongoose from "mongoose";
const HotelSchem = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    desc:{
        type:String,
        required: true
    }, 
    type:{
        type:String,
        required: true
    }, 
     city:{
        type:String,
        required: true
    }, 
    address:{
        type:String,
        required: true
    },
    distance:{
        type:String,
        required: true
    },
    photos:{
        type:String,
        required: true
    }, 
    title:{
        type:String,
        required: true
    }, 
    rooms:{
        type:String,
        required: true
    }, 
    rating:{
        type:Number,
        required: true
    },
    cheapestPrice:{
        type: String,
        required:true
    },
    featured:{
        type: Boolean,
        default: false
    }
},{
    timestamps: true
},)
const Hotel = mongoose.model("Hotel",HotelSchem)
export default Hotel