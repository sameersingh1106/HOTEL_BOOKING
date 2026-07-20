import React, { useEffect, useCallback } from 'react'
import Title from '@/components/Title'
import { assets, userBookingsDummyData } from '@/assets/assets'
import { useAppContext } from '@/context/Appcontext'
import { useState } from 'react'
import toast from 'react-hot-toast'


const Mybookings = () => {

    const {axios, getToken, user} = useAppContext();
    const [bookings, setBookings] = useState(userBookingsDummyData);

    const fetchBookings = useCallback(async () => {
        try {
            const { data } = await axios.get('/api/bookings/mybookings', {
                headers: { Authorization: `Bearer ${await getToken()}` }
            });
            if (data.success) {
                setBookings(data.bookings);
            }else{
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }, [axios, getToken]);

    useEffect(() => {
    const loadData = async () => {
        if (user) {
            await fetchBookings();
        }
    };
    loadData();
}, [user, fetchBookings]);

    return (
        <div className='py-28 md:pb-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            <Title 
                titles='My Bookings'  
                subtitle='Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly' 
                align='left'
            />
            
            <div className='max-w-6xl mt-8 w-full text-gray-800'>
                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 pb-2 font-medium text-base'>
                    <div>Hotel</div>
                    <div>Date & timings</div>
                    <div>Payments</div>
                </div> 
                {bookings.map((booking) => (
                    <React.Fragment key={booking._id}>
                        <div className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6'>
                            
                            
                            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                                <img src={booking.room.images[0]} alt='hotel-img' className='w-full sm:w-44 rounded shadow object-cover'/>
                                <div className='flex flex-col gap-1.5 sm:ml-4'>
                                    <p className='text-2xl font-playfair'>
                                        {booking.room.hotel.name}
                                        <span className='font-inter text-sm ml-2'>({booking.room.roomtype})</span>
                                    </p>
                                    <div className='flex items-center gap-1 text-sm text-gray-500 mt-1'>
                                        <img src={assets.locationIcon} alt='location-icon' className='w-4 h-4'/>
                                        <span>{booking.room.hotel.address}</span>
                                    </div>
                                    <div className='flex items-center gap-1 text-sm text-gray-500'>
                                        <img src={assets.guestIcon} alt='guests-icon' className='w-4 h-4'/>
                                        <span>Guests: {booking.guests}</span>
                                    </div>
                                    <p className='text-base font-semibold mt-1'>Total: ${booking.totalAmount}</p>
                                </div>
                            </div>

                            
                            <div className='flex flex-row md:flex-col justify-between md:justify-center md:gap-2 gap-8 mt-4 md:mt-0'>
                                <div>
                                    <p className='font-medium text-sm md:text-base'>Check-In:</p>
                                    <p className='text-gray-500 text-sm'>
                                        {new Date(booking.checkIn).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}
                                    </p>
                                </div>
                                <div>
                                    <p className='font-medium text-sm md:text-base'>Check-Out:</p>
                                    <p className='text-gray-500 text-sm'>
                                        {new Date(booking.checkOut).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}
                                    </p>
                                </div>
                            </div>

                            
                            <div className='flex flex-col items-start justify-center pt-3 md:pt-0'>
                                <div className='flex items-center gap-2'>
                                    <div className={`w-3 h-3 rounded-full ${booking.status === "Confirmed" ? "bg-green-500" : booking.status === "Cancelled" ? "bg-red-500" : "bg-yellow-500"}`}></div>
                                    <p className={`text-sm font-medium ${booking.isPaid ? 'text-green-600' : 'text-red-500'}`}>
                                        {booking.isPaid ? "Paid" : "Unpaid"}
                                    </p>
                                </div>
                                {!booking.isPaid && (
                                    <button className='px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer'>
                                        Pay Now
                                    </button>
                                )}
                            </div>

                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Mybookings