import React from 'react';
import { PiShareNetworkThin } from "react-icons/pi";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProductById } from '../context/item';


const OurProductList = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickOnProductWithId = (id) => {

    dispatch(fetchProductById(id));
    navigate("/singleProduct");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product._id}
          onClick={() => handleClickOnProductWithId(product._id)}
          className="group relative bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
        >

          {product.badge && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
              {product.badge}
            </span>
          )}

          <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="text-yellow-600 font-bold mt-2">{product.price}</p>
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
            <button className="text-white text-sm px-4 py-2 bg-yellow-600 rounded-lg mb-2 hover:bg-yellow-700">
              Add to cart
            </button>
            <div className="flex space-x-4 text-white">
              <button className="flex items-center space-x-2">
                <PiShareNetworkThin />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2">
                <GrTransaction />
                <span>Compare</span>
              </button>
              <button className="flex items-center space-x-2">
                <MdOutlineFavoriteBorder />
                <span>Like</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurProductList;
