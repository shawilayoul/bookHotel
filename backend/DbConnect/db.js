import mongoose from "mongoose";

 async function dbConnect() {
const mongoAtlasUri = "mongodb://localhost:27017/booking";
    // Connect to the MongoDB cluster
      await mongoose.connect(
      mongoAtlasUri,
    ).then(()=>console.log("db connecred successfully"))
   
}
export default dbConnect