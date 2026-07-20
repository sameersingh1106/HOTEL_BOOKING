import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const sidebarLinks = [
        
        { name: 'Dashboard', path: '/owners/dashboard', icon: '📊' }, 
        { name: 'My Hotels', path: '/owners/my-hotels', icon: '🏨' }, 
        { name: 'Add Hotel', path: '/owners/add-hotel', icon: '➕' }, 
        { name: 'Bookings', path: '/owners/bookings', icon: '📅' }, 
        { name: 'Profile', path: '/owners/profile', icon: '👤' }, 
    ];

  return (
    <div className='md:w-64 w-16 border-r h-screen text-base border-gray-300 pt-4 flex flex-col transition-all duration-300 bg-white'>
        {sidebarLinks.map((link, index) => (
            <NavLink 
                to={link.path} 
                key={index} 
                end 
                
                className={({ isActive }) =>
                    `flex items-center py-3 px-4 md:px-8 gap-3 border-r-4 transition-all duration-150 ${
                        isActive 
                        ? "md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600 font-medium" 
                        : "hover:bg-gray-100/90 border-transparent text-gray-700"
                    }`
                }
            >
                
                <span className='text-xl min-w-6 text-center'>{link.icon}</span>
                
                

                
                <span className='hidden md:block'>{link.name}</span>
            </NavLink> 
        ))}
    </div>
  )
}

export default Sidebar