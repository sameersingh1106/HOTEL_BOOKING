import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { assets, roomCommonData, facilityIcons } from '@/assets/assets'; 
import StarRating from '@/components/StarRating';
import { useAppContext } from '@/context/AppContext'; 
import { toast } from 'react-toastify';


const RoomDetails = () => { 
  const { id } = useParams();
  const { rooms, getToken, axios, navigate } = useAppContext(); 
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [checkInDate, setCheckInDate] = useState('');   
  const [checkOutDate, setCheckOutDate] = useState(''); 
  const [guests] = useState(1);
  
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
  const foundRoom = rooms.find(r => r._id === id); 
  if (foundRoom && (!room || room._id !== foundRoom._id)){
    setTimeout(() => {
      setRoom(foundRoom);
      setMainImage(foundRoom.images[0]);
    }, 0);
  }
}, [rooms, id, room]);


  const checkAvailability = async () => {
    try {
      if(checkInDate >= checkOutDate){
        toast.error("Check-out date must be after check-in date");
        return;
      }
      
      const { data } = await axios.post('/api/bookings/check-availability', { 
        roomId: id, 
        checkInDate, 
        checkOutDate 
      });

      if (data.success) {
        if(data.isAvailable){
          setIsAvailable(true);
          toast.success("Room is available");
        } else {
          toast.error("Room is not available");
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const onSubmitHandler = async(e) => {
    try {
      e.preventDefault();
      if(!isAvailable){
        return checkAvailability();
      } else {
        
        const { data } = await axios.post('/api/bookings/create',
          { roomId: id, checkInDate, checkOutDate, guests, paymentMethod: "Pay at Hotel" },
          { headers: { Authorization: `Bearer ${await getToken()}` } }
        );

        if(data.success){
          toast.success(data.message);
          navigate('/my-bookings');
          scrollTo(0,0);
        } else {
          toast.error(data.message);
        }
      }
    } catch(error){
      toast.error(error.message);
    }
  };

  return room && (
    <div className='pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      
      <div className='flex flex-col items-start md:items-center text-left gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>
          {room.hotel?.name} <span className='font-inter text-sm'>({room.roomType})</span> 
        </h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
      </div>

      
      <div className='flex items-center gap-1 mt-2'>
        <StarRating rating={room.rating} />
        <p className='ml-2 text-sm text-gray-600'>200+ reviews</p>
      </div>

      
      <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
        <img src={assets?.locationIcon} alt='location-icon' className='w-4 h-4' />
        <span>{room.hotel?.address}</span>
      </div>

      
      <div className='flex flex-col lg:flex-row gap-6 mt-6'>
        <div className='lg:w-1/2 w-full'>
          <img src={mainImage} alt='room-main-img' className='w-full h-[400px] object-cover rounded-lg shadow-lg' />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room.images?.length > 1 && room.images.slice(1).map((image, index) => (
            <img
              onClick={() => setMainImage(image)}
              key={index}
              src={image}
              alt='room-thumbnail-img'
              className={`w-full h-[190px] object-cover rounded-xl shadow-md cursor-pointer transition-all 
                ${mainImage === image ? 'outline outline-3 outline-orange-500' : ''}`}
            />
          ))}
        </div>
      </div>

      
      <div className='flex flex-col md:flex-row md:justify-between items-start gap-10 mt-10'>
        <div className='flex flex-col gap-3 flex-1'>
          <h2 className='text-3xl font-playfair md:text-4xl'>Experience Luxury Like Never Before</h2>
          
          <div className='flex flex-wrap items-center gap-4 mt-3 mb-6'>
            {room.amenities?.map((item, index) => (
              <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70 w-max shadow-sm'>
                <img src={facilityIcons?.[item]} alt={item} className='w-5 h-5' />
                <p className='text-xs font-medium text-gray-700'>{item}</p>
              </div>
            ))}
          </div>
          <p className='text-gray-500 leading-relaxed'>{room.description}</p>
        </div>
        
        <div className='text-right min-w-[150px]'>
          <p className='text-2xl font-semibold text-gray-900'>${room.pricePerNight}</p>
          <p className='text-gray-500 text-sm'>/ night</p>
        </div>
      </div>

      <form
        onSubmit={onSubmitHandler} 
        className='flex flex-col md:flex-row items-end justify-between bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.1)]
          rounded-xl p-6 mx-auto mt-16 max-w-6xl gap-6'
      >
        <div className='flex flex-col sm:flex-row items-start gap-6 text-gray-500 w-full md:w-auto'>
          <div className='flex flex-col w-full sm:w-auto'>
            <label htmlFor='checkin' className='font-medium text-gray-700 text-sm'>Check-In</label>
            
            <input 
              type='date' 
              id='checkin'
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)} 
              min={new Date().toISOString().split('T')[0]}
              className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' 
              required
            />
          </div>
          <div className='flex flex-col w-full sm:w-auto'>
            <label htmlFor='checkout' className='font-medium text-gray-700 text-sm'>Check-Out</label>
            
            <input 
              type='date' 
              id='checkout'
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)} 
              min={checkInDate || new Date().toISOString().split('T')[0]}
              disabled={!checkInDate}
              className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' 
              required
            />
          </div>
        </div>
        <button type='submit' className='bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white rounded-md w-full md:w-auto
          md:px-12 py-3 text-base font-medium cursor-pointer whitespace-nowrap'>
          {isAvailable ? "Book Now" : "Check Availability"}
        </button>
      </form>

      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
        {roomCommonData?.map((spec, index) => (
          <div key={index} className='flex items-start gap-3 bg-gray-50 p-4 rounded-xl'>
            {spec.icon && <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6 h-6 object-contain' />}
            <div>
              <p className='text-base font-semibold text-gray-900'>{spec.title}</p>
              <p className='text-gray-600 text-sm mt-0.5'>{spec.description}</p>
            </div>
          </div>
        ))}
      </div>

      
      <div className='max-w-3xl border-y border-gray-200 my-12 py-8 text-gray-500 text-sm leading-relaxed'>
        <p>
          Guests will be allocated on the ground floor according to availability. We will try our best to accommodate your
          preferences, but please note that room allocation is subject to availability at the time of check-in.
        </p>
      </div>

      
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16 bg-gray-50 p-6 rounded-xl shadow-sm'>
        <div className='flex items-center gap-4'>
          <img src={room.hotel?.owner?.image || assets?.defaultAvatar} alt='Host' className='h-14 w-14 md:h-16 md:w-16 rounded-full object-cover border-2 border-white shadow-md' />
          <div>
            <p className='font-semibold text-gray-900 text-lg'>Hosted by {room.hotel?.name}</p>
            <div className='flex items-center gap-1 text-sm text-gray-500 mt-0.5'>
              <StarRating rating={4.8} />
              <span className='ml-1'>(200+ reviews)</span>
            </div>
          </div>
        </div>
        <button className='bg-gray-900 hover:bg-black active:scale-95 transition-all text-white px-6 py-2.5 rounded-lg text-sm font-medium cursor-pointer'>
          Contact Host
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;