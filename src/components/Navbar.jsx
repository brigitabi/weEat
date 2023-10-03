import React, { useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { GoPackage } from 'react-icons/go';
import { BsFillSuitHeartFill, BsFileBarGraph } from 'react-icons/bs';
import { TfiWallet } from 'react-icons/tfi';
import { MdOutlineDiscount } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { FiHelpCircle } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1600px] mx-auto flex justify-between items-center p-4]">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-3">
          {' '}
          We <span className="font-bold">Eat</span>
        </h1>
        <div className="hidden lg:flex items-center bg-blue-100 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pick Up</p>
        </div>
      </div>

      <div>
          <ThemeToggle className="ml-2" size={25} />
        </div>

      {/* search feature */}
      <div className="bg-blue-100 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={22} />
        <input
          className="bg-transparent p-2 focus-outline-none"
          type="text"
          placeholder="Search your next meal..."
        />
      </div>

      {/* cart */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <AiOutlineShoppingCart size={22} className="mr-2" /> Cart
      </button>

      {/* Styling for mobile */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ''
      )}

      {/* side drawer  */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[320px] h-screen bg-gray-200 z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[320px] h-screen bg-gray-200 z-10 duration-300'
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={22}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="test-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-l py-4 flex">
              {' '}
              <GoPackage size={22} className="mr-4" /> My Orders{' '}
            </li>
            <li className="text-l py-4 flex">
              {' '}
              <BsFillSuitHeartFill size={22} className="mr-4" /> Favorites{' '}
            </li>
            <li className="text-l py-4 flex">
              {' '}
              <TfiWallet size={22} className="mr-4" /> Wallet{' '}
            </li>
            <li className="text-l py-4 flex">
              {' '}
              <MdOutlineDiscount size={22} className="mr-4" /> Promotions{' '}
            </li>
            <li className="text-l py-4 flex">
              {' '}
              <FaUserFriends size={22} className="mr-4" /> Invite Friends{' '}
            </li>
            <li className="text-l py-4 flex">
              {' '}
              <BsFileBarGraph size={22} className="mr-4" /> Careers{' '}
            </li>
            <li className="text-l py-4 flex">
              {' '}
              <FiHelpCircle size={22} className="mr-4" /> Help{' '}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
