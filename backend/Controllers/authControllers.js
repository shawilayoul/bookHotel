import User from "../Models/authModel.js"
import bcrypt from "bcrypt"
// register a user 
export const registerUser = async (req,res)=>{
try {
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hashSync(req.body.password, salt)
    const user = await User({
        username: req.body.username,
        email: req.body.email,
        password: hashpassword,
        phone: req.body.phone,
        country: req.body.country
    })
     await user.save()
    res.status(201).json(user)
} catch (error) {
  res.status(500).json(error)  
}
}
// register a user 
export const loginUser = async (req,res)=>{
    try {
        const user = await User.findOne({username: req.body.username})
    if(!user) return res.status(404).json("user dose not exit")
    const match = await bcrypt.compare(req.body.password, user.password)
     if(!match){
     res.status(404).json("wrong password")
    }
     res.status(200).json("user login successfully")
    } catch (err) {
      res.status(500).json(err)  
    }
    }