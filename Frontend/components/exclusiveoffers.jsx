import HotelCart from './HotelCart';
import Title from './Title';
import { roomsDummyData, exclusiveOffers, assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom'; 

const ExclusiveOffers = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                <Title
                    align='left'
                    title='Exclusive Offers'
                    subtitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences'
                />
            </div>

            <div className='flex flex-wrap items-center justify-between gap-4 mb-8'>
                {roomsDummyData.slice(0, 4).map((room, index) => (
                    <HotelCart key={index} room={room} index={index} />
                ))}
            </div>

            <button
                onClick={() => {
                    navigate('/rooms');
                    window.scrollTo(0, 0);
                }}
                className='group flex items-center gap-2'
            >
                View All Offers

                <img
                    src={assets.arrowIcon}
                    alt="arrow-icon"
                    className='group-hover:translate-x-1 transition-all'
                />
            </button>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
                {exclusiveOffers.map((item) => (
                    <div
                        key={item.id}
                        className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center h-64'
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full'>
                            {item.priceOff}% OFF
                        </p>

                        <div>
                            <p className='text-xl font-semibold'>
                                {item.title}
                            </p>

                            <p>
                                {item.description}
                            </p>

                            <p className='text-sm mt-2'>
                                Expires {item.expiryDate}
                            </p>
                        </div>

                        <button className='flex items-center gap-2'>
                            View Offers

                            <img
                                src={assets.arrowIcon}
                                alt="arrow-icon"
                            />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExclusiveOffers;