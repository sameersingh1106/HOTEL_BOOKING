import { useEffect } from 'react';
import Navbar from "./OwnerNavbar"; // Same folder (if renamed) or "./Navbar"
import Sidebar from "./Sidebar";     // FIXED: Same folder (HotelOwner)
import { Outlet } from 'react-router-dom';
import { useAppContext } from '../../../context/Appcontext'; // FIXED: Up 3 levels to Frontend

const Layout = () => {
  const { isOwner, navigate } = useAppContext();

  useEffect(() => {
    if (!isOwner) {
      navigate('/');
    }
  }, [isOwner, navigate]);
  
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex h-full'>
        <Sidebar />
        <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Layout;