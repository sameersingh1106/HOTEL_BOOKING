import express from "express";
import { protect } from "../middleware/authmiddleware.js";
import { registerHotel } from "../controllers/Hotelcontroller.js"; // ✅ Import registerHotel

const hotelRouter = express.Router();

hotelRouter.post('/', protect, registerHotel);

export default hotelRouter;