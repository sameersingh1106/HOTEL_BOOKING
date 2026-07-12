import express from "express";
import { checkAvailabilityAPI, createBooking, getUserBookings } from "../controllers/Bookingcontroller";
import {protect} from '../middleware/authmiddleware.js'

const bookingRouter = express.Router();

bookingRouter.post('/check-availability', checkAvailabilityAPI);
bookingRouter.post('/book', protect, createBooking)
bookingRouter.get('./user', protect, getUserBookings);
bookingRouter.get('./hotel', protect, getUserBookings);

export default  bookingRouter;