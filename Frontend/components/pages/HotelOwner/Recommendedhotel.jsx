import HotelCart from '@/components/HotelCart';
import Title from '@/components/Title'; 
import { useNavigate } from 'react-router-dom'; 
import { useAppContext } from '@/context/Appcontext';
import { useState, useEffect, useCallback } from 'react';



const RecommendedHotels = () => {
  const { rooms, SearchedCities, filterHotels } = useAppContext();
  const [recommended, setRecommended] = useState([]);
  const navigate = useNavigate(); 

  
  const filterhotels = useCallback(() => {
    const result = rooms.slice().filter(room => 
      room.hotel && room.hotel.city && SearchedCities.includes(room.hotel.city)
    );
    setRecommended(result); 
  }, [rooms, SearchedCities, filterHotels]);

  useEffect(() => {
    const timer = setTimeout(() => {
      filterhotels();
    }, 0);

    return () => clearTimeout(timer);
  }, [rooms, SearchedCities]); 


  return recommended.length > 0 && (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
      
      <Title title="Recommended Hotels" subtitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences" />

      <div className='flex flex-wrap items-center justify-between gap-4 mb-8'>
        {recommended.slice(0, 4).map((room, index) => (
          <HotelCart key={index} room={room} index={index} />
        ))}
      </div>
      
      <button onClick={() => { navigate('/rooms'); window.scrollTo(0, 0); }}
        className='px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300'>
        View All Destinations
      </button>
    </div>
  );
};

export default RecommendedHotels;