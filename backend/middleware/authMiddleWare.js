import jwt from "jsonwebtoken"

const verifyToken = async (req,res,next)=>{
const token = req.cookie.access_token;
if(!token){
    res.status(404).json({message:"your not authanticated"})
}
jwt.verify(token,"Shawil12345!",(err,user)=>{
    if(err)return "token is not valid";
    req.user = user
    next();
})
}
export const verifyUser = async(req,res ,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id || req.use.isAdmin){
            next();
        }else{
            res.status(404).json("not authorise")
        }
    })
}
export const verifyAdmin= async(req,res ,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.use.isAdmin){
            next();
        }else{
            res.status(404).json("not authorise")
        }
    })
}
