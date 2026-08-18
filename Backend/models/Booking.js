import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    user: {type: String, ref: "User", required: true},
    room: {type: String, ref: "Room", required: true},
    Hotel: {type: String, ref: "Hotel", required: true},
    CheckInDate: {type: Date,  required: true},
    CheckOutDate: {type: Date, required: true},
    totalPrice: { type: Number, required: true },
    guests: {type: Number, required: true},
    status: {type: String, enum: ["pending", "confirmed", "cancelled"],
        default: "pending"
    },
    paymentMethod: {
        type: String,
        required: true,
        default: "Pay At Hotel",
    },
    isPaid: {type: Boolean, default: false}
    
},{timestamps: true});

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;