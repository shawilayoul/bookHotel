import express from "express";
import {createRoom,updateRoom,getAllRoom,getByIdRoom,deleteRoom} from "../Controllers/roomController.js"
import {verifyAdmin} from "../middleware/authMiddleWare.js"
const router = express.Router()

router.post('/create',createRoom);
router.put('/:id',verifyAdmin,updateRoom);
router.get('/getAll',getAllRoom);
router.get('/:id',getByIdRoom);
router.delete('/:id',verifyAdmin,deleteRoom);

export default router