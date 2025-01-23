import React, { useState } from "react";

const ShopingCartSideBar = ({ isOpen, setIsOpen }) => {

  const toggleCart = () => {
    console.log()
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`fixed top-0 right-0 h-full w-[90%] max-w-[417px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >

        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button
            onClick={() => toggleCart()}
            className="text-gray-500 hover:text-gray-800"
          >
            ✖
          </button>
        </div>

        <div className="p-4 space-y-4">

          <div className="flex items-center">
            <img
              src=""
              alt="Asgaard sofa"
              className="w-20 h-20 rounded-lg"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-sm font-medium">Asgaard sofa</h3>
              <p className="text-sm text-gray-500">1 x Rs. 250,000.00</p>
            </div>
            <button className="text-gray-500 hover:text-gray-800">✖</button>
          </div>

          <div className="flex items-center">
            <img
              src=""
              alt="Casaliving Wood"
              className="w-20 h-20 rounded-lg"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-sm font-medium">Casaliving Wood</h3>
              <p className="text-sm text-gray-500">1 x Rs. 270,000.00</p>
            </div>
            <button className="text-gray-500 hover:text-gray-800">✖</button>
          </div>
        </div>


        <div className="p-4 border-t">
          <div className="flex justify-between text-lg font-medium">
            <span>Subtotal</span>
            <span className="text-yellow-600">Rs. 520,000.00</span>
          </div>
        </div>

        <div className="p-4 flex gap-4 border-t">
          <button className="flex-1 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
            Cart
          </button>
          <button className="flex-1 py-2 bg-black text-white rounded-lg hover:bg-gray-900">
            Checkout
          </button>
          <button className="flex-1 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
            Comparison
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={toggleCart}
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
        />
      )}
    </div>
  );
};

export default ShopingCartSideBar;
