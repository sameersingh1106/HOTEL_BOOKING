import React, { useState } from 'react'
import { assets} from './assets/assets'
import { useAppContext } from '../context/Appcontext'
import { toast } from 'react-toastify';

const HotelReg = () => {

    const { setShowHotelReg, axios, getToken, setIsOwner } = useAppContext()

    
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")
    const [city, setCity] = useState("")
    const [description, setDescription] = useState("")
    const [amenities, setAmenities] = useState("")

    
    const onSubmitHandler = async (event) => {
        try {
            event.preventDefault();
            
            const { data } = await axios.post(
                '/api/hotels/', 
                { name, contact, address, city, description, amenities }, 
                { headers: { Authorization: `Bearer ${await getToken()}` } }
            )

            
            if (data.success) {
                toast.success(data.message)
                setIsOwner(true)
                setShowHotelReg(false);
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
     
    return (
        <div onClick={() => setShowHotelReg(false)}
            className='fixed top-0 left-0 w-full h-screen bg-black/70 flex flex-col items-center justify-center z-50'>
            <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className='flex flex-col items-center bg-white p-8 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto'>
                <img src={assets.regImage} alt="reg-image" className='w-1/2 rounded-xl hidden md:block' />
                <h1 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6'>Hotel Registration</h1>
                
                {/* Hotel Name */}
                <div className='mb-4 w-full'>
                    <label htmlFor="hotelName" className='block text-sm font-medium text-gray-700 mb-1'>Hotel Name</label>
                    {/* 5. FIXED: Changed onchange to onChange */}
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} id="hotelName" name="hotelName" 
                        className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200' placeholder='Enter hotel name' />
                </div>

                {/* City Selection / Address */}
                <div className='mb-4 w-full'>
                    <label htmlFor="city" className='block text-sm font-medium text-gray-700 mb-1'>City</label>
                    <input type="text" onChange={(e) => setCity(e.target.value)} value={city} id="city" name="city" 
                        className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200' placeholder='Enter city' />
                </div>

                <div className='mb-4 w-full'>
                    <label htmlFor="address" className='block text-sm font-medium text-gray-700 mb-1'>Address</label>
                    <input type="text" onChange={(e) => setAddress(e.target.value)} value={address} id="address" name="address" 
                        className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200' placeholder='Enter full address' />
                </div>

                {/* Contact */}
                <div className='mb-4 w-full'>
                    <label htmlFor="contact" className='block text-sm font-medium text-gray-700 mb-1'>Contact Number</label>
                    <input type="text" onChange={(e) => setContact(e.target.value)} value={contact} id="contact" name="contact" 
                        className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200' placeholder='Enter contact number' />
                </div>

                {/* Description */}
                <div className='mb-4 w-full'>
                    <label htmlFor="description" className='block text-sm font-medium text-gray-700 mb-1'>Description</label>
                    <textarea id="description" onChange={(e) => setDescription(e.target.value)} value={description}
                        name="description" rows="3" className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200' placeholder='Provide a brief description of the hotel'></textarea>
                </div>

                {/* Amenities */}
                <div className='mb-4 w-full'>
                    <label htmlFor="amenities" className='block text-sm font-medium text-gray-700 mb-1'>Amenities</label>
                    <input type="text" onChange={(e) => setAmenities(e.target.value)} value={amenities}
                        id="amenities" name="amenities" className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200' placeholder='List amenities separated by commas'/>
                </div>

                {/* Submit Button */}
                <button type="submit" className='w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors mt-2'>Register Hotel</button>  
            </form>
        </div>
    )
}

export default HotelReg