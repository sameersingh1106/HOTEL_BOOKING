import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

export const registerHotel = async(req, res)=>{
    try{
        const (name, adress, contact, city)= req.body;
        const owner = req.user._id

        const hotel = await Hotel.findOne({owner})
        if (hotel){
            return res.json({ success: false, message: "Hotel Already Registered"})
        }

        await Hotel.create({name, address, contact, city, Owner});

        await User.findbyIdAndUpdate(owner, {role: "hotelOwner"});

        res.json({success: true, message: "Hotel Registered Successfully"})

    } catch (error){
        res.json({success: false, message: error.message})

    }
}