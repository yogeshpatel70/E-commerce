import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

import ShopingCartSideBar from "./ShopingCartSideBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleCartButton = () => {
    setIsOpen(true)
  }

  return (
    <header className="bg-white  shadow-md w-full ">
      {isOpen && <ShopingCartSideBar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16">

        <div className="flex items-center">
          <img src="Images2/logo.png" alt="Furniro Logo" className="w-8 sm:w-10 h-auto" />
          <h1 className="text-lg sm:text-xl font-bold text-gray-800 ml-2 whitespace-nowrap">
            Furniro
          </h1>
        </div>

        <nav className="hidden lg:flex space-x-8 text-gray-600">
          <Link to="/" className="hover:text-gray-800 transition">
            Home
          </Link>
          <Link to="/blogs" className="hover:text-gray-800 transition">
            Blogs
          </Link>
          <Link to="/shop" className="hover:text-gray-800 transition">
            Shop
          </Link>
          <Link to="/contact" className="hover:text-gray-800 transition">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="text-gray-600 hover:text-gray-800 transition" aria-label="Search">
            <FaSearch className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>
          <button className="text-gray-600 hover:text-gray-800 transition" aria-label="Favorite">
            <MdFavoriteBorder className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>
          <button
            className="relative text-gray-600 hover:text-gray-800 transition"
            aria-label="Cart"
            onClick={() => handleCartButton()}
          >
            <FaShoppingCart className="w-5 sm:w-6 h-5 sm:h-6" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          <button className="text-gray-600 hover:text-gray-800 transition" aria-label="User">
            <FaUserCircle className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>


          <button
            className="lg:hidden text-gray-600 hover:text-gray-800 transition"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </div>


      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col px-4 py-4 space-y-2 text-gray-600">
            <Link to="/" className="hover:text-gray-800 transition">
              Home
            </Link>
            <Link to="/blogs" className="hover:text-gray-800 transition">
              Blogs
            </Link>
            <Link to="/shop" className="hover:text-gray-800 transition">
              Shop
            </Link>
            <Link to="/contact" className="hover:text-gray-800 transition">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
