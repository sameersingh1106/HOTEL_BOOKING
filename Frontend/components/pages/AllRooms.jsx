import { useState, useMemo } from 'react';
import { assets, facilityIcons } from '@/assets/assets';
import { useSearchParams } from 'react-router-dom';
import StarRating from '../../components/StarRating';
import { useAppContext } from '@/context/Appcontext'; 

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm text-gray-600 hover:text-gray-900'>
            <input 
                type='checkbox' 
                checked={selected} 
                onChange={(e) => onChange(e.target.checked, label)}
                className='w-4 h-4 accent-gray-700'
            />
            <span>{label}</span>
        </label>
    );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm text-gray-600 hover:text-gray-900'>
            <input 
                type='radio' 
                name='sortoption' 
                checked={selected} 
                onChange={(e) => onChange(e.target.checked, label)}
                className='w-4 h-4 accent-gray-700'
            />
            <span>{label}</span>
        </label>
    );
};

const AllRooms = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { rooms, navigate, currency } = useAppContext(); 
    
    const [openFilter, setOpenFilter] = useState(false);
    
    
    const [selectedFilters, setSelectedFilters] = useState({
        roomType: [],
        priceRange: [],
    });

    const [selectedSort, setSelectedSort] = useState(" ");

    const roomTypes = [
        "Single Bed",
        "Double Bed",
        "Luxury Room",
    ];
    
    const priceRanges = [
        '0 to 500',
        '500 to 1000',
        '1000 to 1500',
        '1500 to 2000',
        '2000+'
    ];

    const sortOptions = [
        'Price: Low to High',
        'Price: High to Low',
        'Rating: High to Low',
        'Rating: Low to High',
    ];

    
    const handleFilterChange = (checked, value, type) => {
        setSelectedFilters((prevFilters) => {
            const updatedFilters = { ...prevFilters };
            if (checked) {
                updatedFilters[type] = [...updatedFilters[type], value];
            } else {
                updatedFilters[type] = updatedFilters[type].filter((item) => item !== value);
            }
            return updatedFilters;
        });
    };

    const handleSortChange = (checked, value) => {   
        if (checked) {
            setSelectedSort(value);
        }
    };

    const filteredRooms = useMemo(() => {
        
        const matchRoomType = (room) => {
            return selectedFilters.roomType.length === 0 || selectedFilters.roomType.includes(room.roomType);
        };

        const matchPriceRange = (room) => { 
            return selectedFilters.priceRange.length === 0 || selectedFilters.priceRange.some((range) => {
                const [min, max] = range.split(' to ').map(Number);
                if (max) {
                    return room.pricePerNight >= min && room.pricePerNight <= max;
                } else {
                    const minPriceOnly = parseInt(range);
                    return room.pricePerNight >= minPriceOnly;
                }
            });
        };

        const filterDestinations = (room) => {
            const destination = searchParams.get('destination');
            if (!destination) {
                return true;
            }
            return room.hotel?.city.toLowerCase().includes(destination?.toLowerCase());
        };

        const sortRooms = (a, b) => {  
            if (selectedSort === 'Price: Low to High') {
                return a.pricePerNight - b.pricePerNight;
            } else if (selectedSort === 'Price: High to Low') {
                return b.pricePerNight - a.pricePerNight;
            } else if (selectedSort === 'Rating: High to Low') {
                return b.rating - a.rating;
            } else if (selectedSort === 'Rating: Low to High') {
                return a.rating - b.rating;
            }
            return 0;
        };

        
        return rooms
            .filter(room => 
                matchRoomType(room) &&
                matchPriceRange(room) &&
                filterDestinations(room)
            )
            .sort(sortRooms);
    }, [rooms, selectedFilters, selectedSort, searchParams]);

    const clearFilters = () => {
        setSelectedFilters({
            roomType: [],
            priceRange: [],
        });
        setSelectedSort(" ");
        setSearchParams({});
    };

    return (
        <div className='flex flex-col-reverse lg:flex-row items-start justify-between gap-10 pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            
            
            <div className='flex-1 w-full'>
                <div className="flex flex-col items-start text-left">
                    <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>All Rooms</h1>
                    <p className='text-sm md:text-base text-gray-500 mt-2'>
                        Take advantage of our limited-time offer and special package to enhance your stay and create unforgettable memories.
                    </p>
                </div>

                {filteredRooms.map((room) => (
                    <div key={room._id} className='flex flex-col md:flex-row gap-6 mt-8 border-b border-gray-100 pb-6 w-full'>
                        
                        <img 
                            onClick={() => navigate(`/rooms/${room._id}`)} 
                            src={room.image} 
                            alt='room-img' 
                            title='View Room Details' 
                            className='max-h-64 md:w-1/2 rounded-xl shadow-md object-cover cursor-pointer hover:opacity-90 transition-all' 
                        />
                        
                        <div className='md:w-1/2 flex flex-col gap-2 justify-between py-1'>
                            <div>
                                <p className='text-gray-400 text-xs tracking-wider uppercase font-semibold'>{room.hotel?.city}</p>
                                <p 
                                    onClick={() => { navigate(`/rooms/${room._id}`); window.scrollTo(0, 0); }}
                                    className='text-gray-800 text-2xl font-playfair font-semibold cursor-pointer hover:text-orange-500 transition-colors mt-1'
                                >
                                    {room.hotel?.name}
                                </p>
                                
                                <div className='flex items-center mt-2'>
                                    <StarRating rating={room.rating} />
                                    <p className='ml-2 text-xs text-gray-500'>(200+ reviews)</p>
                                </div>

                                <div className='flex items-center gap-1.5 text-gray-500 mt-3 text-sm'>
                                    <img src={assets?.locationIcon} alt='location-icon' className='w-4 h-4' />
                                    <span>{room.hotel?.address}</span>
                                </div>

                                <div className='flex flex-wrap items-center mt-4 gap-2'> 
                                    {room.amenities?.map((amenity, idx) => (
                                        <div key={idx} className='flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F5F5FF]/80 border border-blue-50/50'>
                                            <img src={facilityIcons?.[amenity]} alt={amenity} className='w-4 h-4' />
                                            <p className='text-[11px] font-medium text-gray-600'>{amenity}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='mt-4 md:mt-0'>
                                <p className='text-xl font-semibold text-gray-800'>
                                    {currency}{room.pricePerNight}<span className='text-sm text-gray-500 font-normal'> / night</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            
            <div className='bg-white w-full lg:w-80 border border-gray-200 rounded-xl shadow-sm p-5 mb-6 lg:mb-0 sticky top-36'>
                <div className='flex items-center justify-between pb-3 border-b border-gray-200'>
                    <p className='text-base font-semibold text-gray-700 tracking-wide'>FILTER</p>
                    <div className='text-xs font-medium text-orange-500 cursor-pointer'>
                        <span onClick={() => setOpenFilter(!openFilter)} className='lg:hidden'>
                            {openFilter ? 'Hide Options' : 'Show Options'}
                        </span>
                        <span onClick={clearFilters} className='hidden lg:block text-gray-400 hover:text-gray-600'>CLEAR ALL</span>
                    </div>
                </div>

                <div className={`flex flex-col gap-5 mt-4 transition-all duration-300 ${openFilter ? 'block' : 'hidden lg:flex'}`}>
                    <div>
                        <p className='font-semibold text-sm text-gray-800 mb-1'>Popular Filters</p>
                        {roomTypes.map((type, index) => (
                            <CheckBox 
                                key={index} 
                                label={type} 
                                selected={selectedFilters.roomType.includes(type)} 
                                onChange={(checked) => handleFilterChange(checked, type, 'roomType')} 
                            />
                        ))}
                    </div>

                    <div>
                        <p className='font-semibold text-sm text-gray-800 mb-1'>Price Ranges</p>
                        {priceRanges.map((range, index) => (
                            <CheckBox 
                                key={index} 
                                label={`${currency} ${range}`} 
                                selected={selectedFilters.priceRange.includes(range)} 
                                onChange={(checked) => handleFilterChange(checked, range, 'priceRange')} 
                            />
                        ))}
                    </div>

                    <div className='pt-2 border-t border-gray-100'>
                        <p className='font-semibold text-sm text-gray-800 mb-1'>Sort By</p>
                        {sortOptions.map((option, index) => (
                            <RadioButton 
                                key={index} 
                                label={option} 
                                selected={selectedSort === option} 
                                onChange={(checked) => handleSortChange(checked, option)}  
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllRooms;