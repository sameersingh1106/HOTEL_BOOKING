import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from "./components/pages/Home";
import AllRooms from './components/pages/AllRooms';
import RoomDetails from './components/pages/Roomdetails';
import MyBookings from './components/pages/Mybookings';
import Footer from './components/footer';
import HotelReg from './components/HotelReg';
import Layout from './components/pages/HotelOwner/Layout';
import Dashboard from './components/pages/HotelOwner/Dashboard';
import AddRoom from './components/pages/HotelOwner/AddRoom';
import ListRoom from './components/pages/HotelOwner/ListRoom';
import {toaster} from 'react-hot-toast'
import { useAppContext } from './context/Appcontext';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes('owners');
  const {showHotelReg} = useAppContext();

  return (
    <div>
      <toaster/>
      {!isOwnerPath && <Navbar />}
      {showHotelReg && <HotelReg />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/owners/*" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;