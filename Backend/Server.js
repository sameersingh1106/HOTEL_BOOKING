import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import {clerkMiddleware} from "@clerk/clerk-sdk-node";
import clerkWebhooks from "./controllers/clerkwebhooks.js";
import userRouter from "./routes/userRoutes.js";
import hotelRouter from "./routes/Hotelroutes.js";
import connectcloudinary from "./configs/cloudinary.js";
import roomRouter from "./routes/Roomroutes.js";
import bookingRouter from "./routes/Bookingroutes.js";

connectDB()
connectcloudinary();


const app=express()
app.use(cors())

app.use(express.json())
app.use(clerkMiddleware())


app.use{"/api/clerk", (req,res)=>{
    
}
}

app.get('/',(req,res)=>res.send("API is working"))
app.use('/api/user', userRouter)
app.use('/api/hotels', hotelRouter)
app.use('/api/rooms', roomRouter)
app.use('/api/booking', bookingRouter)



const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));