import express from "express";
import upload from "../middleware/uploadMiddleware.js"
import { protect } from "../middleware/authmiddleware.js";
import { createRoom, getOwnerRoom, getRoom, toggleRoomAvailability } from "../controllers/Roomcontroller.js";

const roomRouter = express.Router();

roomRouter.post('/',  upload.array("images", 4), protect, createRoom)
roomRouter.get('/',  getRoom)
roomRouter.post('/owner',  protect, getOwnerRoom)
roomRouter.post('/toggle-availability',  protect, toggleRoomAvailability)



export default roomRouter;