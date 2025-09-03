import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react';
import { useClerk,UserButton,useUser, } from '@clerk/clerk-react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const { user } = useUser()
  const {openSignIn} = useClerk()
  const navigate = useNavigate()

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-36 py-5 bg-black bg-opacity-80 backdrop-blur-md text-white">
      
      {/* Logo */}
      <Link to="/" className="max-md:flex-1">
        <img src={assets.logo} alt="Logo" className="w-36 h-auto" />
      </Link>

      {/* Nav Links */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 max-md:w-full max-md:h-screen md:px-8 py-3 max-md:bg-black/90 md:bg-white/10 md:border rounded-full border  border-gray-300/20 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-md:w-full' : 'max-md:w-0'
        }`}
      >
        <XIcon
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer text-white"
          onClick={() => setIsOpen(false)}
        />

        <Link onClick={() => { window.scrollTo(0, 0); setIsOpen(false); }} to="/">Home</Link>
        <Link onClick={() => { window.scrollTo(0, 0); setIsOpen(false); }} to="/movies">Movies</Link>
        <Link onClick={() => { window.scrollTo(0, 0); setIsOpen(false); }} to="/theaters">Theaters</Link>
        <Link onClick={() => { window.scrollTo(0, 0); setIsOpen(false); }} to="/release">Release</Link>
        <Link onClick={() => { window.scrollTo(0, 0); setIsOpen(false); }} to="/favourite">Favourites</Link>
      </div>

      {/* Search & Login */}
      <div className="flex items-center gap-4">
        <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer" />
      {
        !user? (
          <button
            onClick={ openSignIn}
            className="hidden md:block px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer text-white"
          >
            Login
          </button>
        ):(
          <UserButton>
        <UserButton.MenuItems>
          <UserButton.Action
          label='My Bookings' labelIcon={<TicketPlus width={15} />}onClick={()=>navigate('/my-bookings')}/>
          </UserButton.MenuItems>

          </UserButton>
          
         
   
        )
      }
{/* 
        <button className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer text-white">
          Login
        </button> */}
      </div>

      {/* Mobile Menu Icon */}
      <MenuIcon
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default Navbar;
