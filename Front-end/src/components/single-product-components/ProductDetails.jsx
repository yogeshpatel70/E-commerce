import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductDetail = ({ product }) => {
  console.log(product);
  return (
    <div className="bg-white flex flex-col lg:flex-row gap-6 p-6 lg:p-10 max-w-[1241px] mx-auto">

      <div className="flex flex-col gap-4 lg:flex-row lg:max-w-[553px] ">

        <div className="grid grid-cols-4 lg:flex lg:flex-col gap-2 lg:gap-2">
          {["Images2/product1.png", "Images2/product2.png", "Images2/product3.png"].map((img, index) => (
            <div
              key={index}
              className="w-[60px] h-[60px] sm:w-[76px] sm:h-[80px] bg-[#F9F1E7] rounded-md flex-shrink-0"
            ><img src={img} alt="jlkfs" /></div>
          ))}
        </div>


        <div className="w-full h-[300px] sm:h-[400px] lg:w-[423px] lg:h-[400px] bg-[#F9F1E7] rounded-md lg:ml-[30px] lg:mr-8"><img className="lg:w-[423px]" src={product.image} alt="" /></div>
      </div>


      <div className="flex flex-col gap-6 lg:max-w-[606px]">
        <h1 className="text-2xl lg:text-4xl font-bold">{product.name}</h1>
        <p className="text-xl lg:text-2xl text-gray-700">{product.discountedPrice}</p>


        <div className="flex items-center gap-2">
          <div className="flex gap-1 text-yellow-400">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="text-lg">
                  ★
                </span>
              ))}
          </div>
          <p className="text-gray-500">(5 Customer Reviews)</p>
        </div>


        <p className="text-sm lg:text-base text-gray-600">
          {product.description}.
        </p>


        <div>
          <h3 className="text-sm font-bold mb-2">Size</h3>
          <div className="flex gap-2">
            {["L", "XL", "XS"].map((size, index) => (
              <button
                key={index}
                className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100"
              >
                {size}
              </button>
            ))}
          </div>
        </div>


        <div>
          <h3 className="text-sm font-bold mb-2">Color</h3>
          <div className="flex gap-2">
            {["#5E3AEE", "#CAA17E", "#4B4B4B"].map((color, index) => (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className="w-6 h-6 rounded-full border border-gray-300"
              ></div>
            ))}
          </div>
        </div>


        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center border border-gray-300 rounded">
            <button className="px-3 text-lg">-</button>
            <input
              type="text"
              className="w-12 text-center border-l border-r border-gray-300"
              value="1"
              readOnly
            />
            <button className="px-3 text-lg">+</button>
          </div>

          <Link to={"/cart"} className="px-6 py-2 bg-black text-white rounded w-full lg:w-auto">
            Add To Cart
          </Link>
          <Link to="/compare" className="px-6 py-2 border border-gray-300 rounded w-full lg:w-auto">
            Compare
          </Link>
        </div>


        <div className="flex flex-col text-sm text-gray-500 gap-1">
          <p>
            <strong>SKU:</strong> SS001
          </p>
          <p>
            <strong>Category:</strong> Sofas
          </p>
          <p>
            <strong>Tags:</strong> Sofa, Chair, Home, Shop
          </p>
        </div>


        <div className="flex gap-3">

          <button

            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
          >
            <FaFacebookF />
          </button>
          <button

            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
          >
            <FaTwitter />
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
