import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
const ShoppingCart = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1332px] mx-auto p-6 bg-white">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Cart Table */}
        <div className="w-full md:w-[70%] bg-[#FAF3E6] rounded-lg shadow p-4 overflow-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-[#FAF3E6] text-gray-700">
                <th className="p-4 font-medium">Product</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Quantity</th>
                <th className="p-4 font-medium">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                {/* Product Info */}
                <td className="p-4 flex items-center gap-4">
                  <img
                    src="Images2/homefirst.jpg"
                    alt="Asgaard sofa"
                    className="w-20 h-20 object-cover"
                  />
                  <span className="text-gray-800">Asgaard sofa</span>
                </td>
                {/* Price */}
                <td className="p-4 text-gray-700">Rs. 250,000.00</td>
                {/* Quantity */}
                <td className="p-4">
                  <div className="w-8 h-6 border bg-white border-gray-300 rounded text-center flex items-center justify-center text-sm">
                    1
                  </div>
                </td>
                {/* Subtotal */}
                <td className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Rs. 250,000.00</span>
                    <button className="text-yellow-600 text-xl ml-2">
                      <MdDeleteOutline />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart Totals Section */}
        <div className="w-full md:w-[30%] bg-[#FAF3E6] rounded-lg shadow p-6">
          <h2 className="text-gray-800 text-lg font-medium mb-4">Cart Totals</h2>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-4">
            <span>Total</span>
            <span className="text-yellow-600 font-medium">Rs. 250,000.00</span>
          </div>
          <button onClick={() => navigate('/checkout')} className="w-full bg-yellow-500 text-white py-2 rounded shadow hover:bg-yellow-600">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
