import React, { useState } from "react";
import { FaFilter, FaTh, FaBars } from "react-icons/fa";
import { Slider } from "@mui/material";

const FilterBar = ({ filters, setFilters, setSort, view, setView }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(filters.priceRange);
  const [discount, setDiscount] = useState(filters.discount);

  const toggleFilterModal = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const applyFilters = () => {
    setFilters((prev) => ({
      ...prev,
      priceRange,
      discount,
      isFilter: true,
    }));
    toggleFilterModal();
  };

  return (
    <div className="bg-[#F9F1E7] p-4 flex flex-wrap items-center justify-between space-y-4 md:space-y-0">
      <div className="w-full md:w-auto flex flex-wrap items-center justify-between md:justify-start space-y-4 md:space-y-0 md:space-x-4">
        <button
          onClick={toggleFilterModal}
          className="flex items-center space-x-2 text-gray-800 hover:text-gray-600 transition"
        >
          <FaFilter size={16} />
          <span className="text-sm">Filter</span>
        </button>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded ${view === "grid" ? "bg-gray-200" : "hover:bg-gray-100"}`}
          >
            <FaTh size={16} />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded ${view === "list" ? "bg-gray-200" : "hover:bg-gray-100"}`}
          >
            <FaBars size={16} />
          </button>
        </div>

        <span className="text-gray-600 text-sm md:text-base">
          Showing 1–16 of 32 results
        </span>
      </div>

      <div className="w-full md:w-auto flex flex-wrap items-center justify-between md:justify-end space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm md:text-base">Show</span>
          <select
            className="border border-gray-300 rounded-md px-2 py-1 text-sm md:text-base text-gray-800 bg-white focus:outline-none"
          >
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="48">48</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm md:text-base">Sort by</span>
          <select
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 text-sm md:text-base text-gray-800 bg-white focus:outline-none"
          >
            <option value="default">Default</option>
            <option value="ascending">Price: Low to High</option>
            <option value="descending">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white w-full max-w-lg mx-4 p-6 rounded-md shadow-lg overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">Filter Options</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Price Range</label>
              <Slider
                value={priceRange}
                onChange={(e, newValue) => setPriceRange(newValue)}
                valueLabelDisplay="auto"
                min={250000}
                max={16000000}
                sx={{ color: "#ff4081" }}
              />
              <div className="text-sm mt-2">
                ₹{priceRange[0]} - ₹{priceRange[1]}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Discount</label>
              <select
                value={discount}
                onChange={(e) => setDiscount(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-800 bg-white focus:outline-none"
              >
                <option value={0}>All</option>
                <option value={10}>10% or more</option>
                <option value={20}>20% or more</option>
                <option value={30}>30% or more</option>
                <option value={50}>50% or more</option>
              </select>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={toggleFilterModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={applyFilters}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;