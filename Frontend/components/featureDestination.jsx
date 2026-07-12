import react from 'react'
import HotelCart from './HotelCart'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeatureDestination = () => {
    const {rooms, navigate} = useAppContext();
    
    return rooms.length >0 && (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
            <title title= "feature destination" subtitle="Discover our handpicked selection of exceptional properties around the world,
             offering unparalleled luxury and unforgettable experiences"></title>

            <div className='flex flex-wrap items-center justify-between gap-4 mb-8'>
                {roomsDummyData.slice(0,4).map((room, index) => (
                    <HotelCart key={index} room={room} index={index} />
                ))}
            </div>
            <button onclick={() => {navigate('/rooms'); scrollTo(0,0)}}
            className='px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300'>View All Destinations</button>
        </div>
    )
}

export default FeatureDestination