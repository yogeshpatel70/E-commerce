import React from "react";
import { PiShareNetworkThin } from "react-icons/pi";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProductById } from "../components/context/item";
const Item = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(item);
  const handleClickOnProductWithId = (id) => {

    dispatch(fetchProductById(id));
    navigate("/singleProduct");
  };

  return (
    <div onClick={() => handleClickOnProductWithId(item._id)} className="max-w-xs w-[285px] h-[446px] bg-white shadow-md rounded-lg overflow-hidden relative group">
      <div className="relative">
        <img
          src={item.image}
          alt="Product"
          className="w-[285px] h-[301px] object-cover"
        />
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {item.discountPercentage}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-gray-800 font-bold text-lg">{item.name}</h3>
        <p className="text-gray-500 text-sm">{item.description}</p>

        <div className="mt-2">
          <span className="text-gray-800 font-bold text-lg">{item.discountedPrice}</span>
          <span className="text-gray-400 line-through text-sm ml-2">
            {item.originalPrice}
          </span>
        </div>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
        <button className="text-yellow-600 text-sm px-4 py-2 bg-white rounded-lg mb-2 hover:bg-yellow-600 hover:text-white">
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
  );
};

export default Item;
