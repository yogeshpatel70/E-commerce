import React, { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional-info", label: "Additional Information" },
    { id: "reviews", label: "Reviews [5]" },
  ];

  return (
    <div className="max-w-[1440px] mx-auto bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-8 py-4 text-gray-700 text-base lg:text-lg font-medium border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 ${activeTab === tab.id
                ? "border-b-2 border-black text-black"
                : "border-b-2 border-transparent hover:text-gray-900"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="px-4 sm:px-6 lg:px-16 py-8">
        {activeTab === "description" && (
          <div className="text-gray-600 text-base text-center leading-relaxed">
            <p>
              Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
          </div>
        )}
        {activeTab === "additional-info" && (
          <div className="text-gray-600 text-base">
            <p>Additional information will be displayed here.</p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="text-gray-600 text-base">
            <p>Customer reviews will be displayed here.</p>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 mb-8 sm:mt-16 sm:mb-16">
        <div className="w-full sm:w-[605px] h-[348px] bg-[#F9F1E7] rounded flex items-center justify-center">
          <img
            src="Images2/Ash.png"
            alt="Sofa 1"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="w-full sm:w-[605px] h-[348px] bg-[#F9F1E7] rounded flex items-center justify-center">
          <img
            src="Images2/Ash.png"
            alt="Sofa 2"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
