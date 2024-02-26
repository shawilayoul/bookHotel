import express from "express";
import {createRoom,updateRoom,getAllRoom,getByIdRoom,deleteRoom} from "../Controllers/roomController.js"
const router = express.Router()

router.post('/create',createRoom);
router.put('/:id',updateRoom);
router.get('/getAll',getAllRoom);
router.get('/:id',getByIdRoom);
router.delete('/:id',deleteRoom);

export default router