import express from "express"
import { loginUser, registerUser } from "../Controllers/authControllers.js"

const router = express.Router()

// register user
router.post("/register", registerUser)
// login user
router.post("/login",loginUser)
export default router