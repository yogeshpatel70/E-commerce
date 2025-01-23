import React from "react";

const ArrivalBanner = () => {
  return (
    <div
      className="relative w-full h-[716.83px] opacity-100 bg-cover bg-center"
      style={{ backgroundImage: "url('/Images2/homefirst.jpg')" }}
    >
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-start w-[643px] h-[444px] max-w-[90%] max-h-[90%] bg-yellow-50 p-8 space-y-4 rounded-tl-[10px] md:max-w-[80%] md:p-6 sm:max-w-[95%] sm:p-4"
        style={{ opacity: 1 }}
      >
        <p className="text-sm font-medium text-gray-700 sm:text-xs">New Arrival</p>
        <h1 className="text-4xl font-bold text-yellow-600 md:text-3xl sm:text-2xl">Discover Our New Collection</h1>
        <p className="text-base text-gray-600 md:text-sm sm:text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="px-6 py-3 text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 md:px-4 md:py-2 sm:px-3 sm:py-1">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ArrivalBanner;