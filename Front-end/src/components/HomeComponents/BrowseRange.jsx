import React from "react";

const BrowseRange = () => {
  return (
    <div className="relative w-full h-auto p-4 md:p-8 lg:w-full lg:h-[685px] lg:top-10 opacity-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-2xl">Browse The Range</h2>
        <p className="text-gray-600 text-base sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        <div className="flex flex-col items-center">
          <img
            src="/Images2/dining.png"
            alt="Dining"
            className="w-[381px] max-w-[350px] h-[480px] object-cover rounded-lg shadow-md"
          />
          <p className="text-lg font-medium text-gray-700 mt-4 sm:text-base">Dining</p>
        </div>


        <div className="flex flex-col items-center">
          <img
            src="/Images2/living.png"
            alt="Living"
            className="w-[381px] max-w-[350px] h-[480px] object-cover rounded-lg shadow-md"
          />
          <p className="text-lg font-medium text-gray-700 mt-4 sm:text-base">Living</p>
        </div>


        <div className="flex flex-col items-center">
          <img
            src="/Images2/Bedroom.png"
            alt="Bedroom"
            className="w-[381px] max-w-[350px] h-[480px] object-cover rounded-lg shadow-md"
          />
          <p className="text-lg font-medium text-gray-700 mt-4 sm:text-base">Bedroom</p>
        </div>
      </div>
    </div>
  );
};

export default BrowseRange;