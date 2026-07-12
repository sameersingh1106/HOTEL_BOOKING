import React from 'react'
import { NavLink } from 'react-router-dom';
// import { assets } from '../assets/assets'; // ⚠️ Make sure your icon assets are imported if using local files

const Sidebar = () => {

    const sidebarLinks = [
        // ✅ Added fallback/mock icons since they are being rendered below
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
                to={link.path} // ✅ Fixed: Changed 'item.path' to 'link.path'
                key={index} 
                end 
                // ✅ Fixed: Properly destructured { isActive } and used backticks (``) for string interpolation
                className={({ isActive }) =>
                    `flex items-center py-3 px-4 md:px-8 gap-3 border-r-4 transition-all duration-150 ${
                        isActive 
                        ? "md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600 font-medium" 
                        : "hover:bg-gray-100/90 border-transparent text-gray-700"
                    }`
                }
            >
                {/* If your icons are strings/emojis: */}
                <span className='text-xl min-w-6 text-center'>{link.icon}</span>
                
                {/* OR if they are image paths, uncomment this instead:
                <img src={link.icon} alt={link.name} className='h-6 w-6 object-contain' /> 
                */}

                {/* Hide text on mobile layouts to support your responsive w-16 width */}
                <span className='hidden md:block'>{link.name}</span>
            </NavLink> // ✅ Fixed: Properly matched capitalization and closed tag cleanly
        ))}
    </div>
  )
}

export default Sidebar