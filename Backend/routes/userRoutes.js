import express from "express";
import {protect } from "../middleware/authmiddleware.js";
import { getUserData, storeRecentSearchedcities } from "../controllers/usercontroller.js";
 
const userRouter = express.Router();

userRouter.get('/', protect, getUserData);
userRouter.post('/store-recent-search', protect, storeRecentSearchedcities);

export default userRouter;