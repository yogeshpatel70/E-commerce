import React from 'react';
import { Link } from 'react-router-dom';

const ShopHeader = ({ headerName }) => {
  return (
    <div
      className="relative bg-cover bg-center h-[316px] flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('Images2/ShopHeader.jpg')"
      }}
    >

      <div className="absolute  inset-0 bg-white bg-opacity-50"></div>


      <div className="relative z-10 text-center">

        <h1 className="text-4xl font-bold text-gray-800">{headerName == "shop" && "Shop"}{headerName == "Blogs" && "blogs"}{headerName == "contact" && "Contact"}{headerName == "checkout" && "CheckOut"}{headerName == "compare" && "Compare"}</h1>

        <p className="text-gray-600 mt-2">
          <Link to="/" className="text-gray-500 hover:text-gray-800 transition">
            Home
          </Link>{' '}
          &gt;{' '}
          {headerName == 'shop' &&
            <Link to="/shop" className="text-gray-800 font-semibold hover:text-gray-900 transition">
              Shop
            </Link>}
          {headerName == 'Blogs' &&
            <Link to="/blogs" className="text-gray-800 font-semibold hover:text-gray-900 transition">
              Blogs
            </Link>}
          {headerName == 'checkout' &&
            <Link to="/checout" className="text-gray-800 font-semibold hover:text-gray-900 transition">
              CheckOut
            </Link>}

          {headerName == 'contact' &&
            <Link to="/contact" className="text-gray-800 font-semibold hover:text-gray-900 transition">
              Contact
            </Link>}
          {headerName == 'compare' &&
            <Link to="/compare" className="text-gray-800 font-semibold hover:text-gray-900 transition">
              Compare
            </Link>}
        </p>
      </div>
    </div>
  );
};

export default ShopHeader;
