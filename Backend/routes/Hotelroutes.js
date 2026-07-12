import express from "express";
import {protect } from "../middleware/authmiddleware.js";
import { getUserData, storeRecentSearchedcities } from "../controllers/usercontroller.js";

const hotelRouter = express.Router();

hotelRouter.post ('/', protect, registerHotel);

export default hotelRouter;