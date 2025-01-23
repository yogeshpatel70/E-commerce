import React from "react";
import { FaTrophy, FaShieldAlt, FaTruck, FaHeadset } from "react-icons/fa"; // Importing icons from React Icons

const FeaturesBar = () => {
  return (
    <div className="bg-[#f9f5f1] py-10">
      <div className="max-w-[1334px] mx-auto flex flex-wrap justify-between items-center gap-6 px-5">
        {/* High Quality */}
        <div className="flex flex-col items-center text-center gap-2 flex-1 min-w-[250px]">
          <FaTrophy className="w-12 h-12 text-yellow-500" />
          <h3 className="text-lg font-bold text-gray-800">High Quality</h3>
          <p className="text-sm text-gray-500">Crafted from top materials</p>
        </div>

        {/* Warranty Protection */}
        <div className="flex flex-col items-center text-center gap-2 flex-1 min-w-[250px]">
          <FaShieldAlt className="w-12 h-12 text-green-500" />
          <h3 className="text-lg font-bold text-gray-800">Warranty Protection</h3>
          <p className="text-sm text-gray-500">Over 2 years</p>
        </div>

        {/* Free Shipping */}
        <div className="flex flex-col items-center text-center gap-2 flex-1 min-w-[250px]">
          <FaTruck className="w-12 h-12 text-blue-500" />
          <h3 className="text-lg font-bold text-gray-800">Free Shipping</h3>
          <p className="text-sm text-gray-500">Order over $150</p>
        </div>

        {/* 24/7 Support */}
        <div className="flex flex-col items-center text-center gap-2 flex-1 min-w-[250px]">
          <FaHeadset className="w-12 h-12 text-purple-500" />
          <h3 className="text-lg font-bold text-gray-800">24 / 7 Support</h3>
          <p className="text-sm text-gray-500">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBar;
