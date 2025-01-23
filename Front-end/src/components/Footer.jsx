// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center sm:text-left">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Funiro.</h2>
            <address className="not-italic text-gray-500">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </address>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-gray-400 uppercase text-sm mb-2">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-black hover:text-gray-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#shop" className="text-black hover:text-gray-700">
                  Shop
                </a>
              </li>
              <li>
                <a href="#about" className="text-black hover:text-gray-700">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-black hover:text-gray-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-gray-400 uppercase text-sm mb-2">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#payment-options" className="text-black hover:text-gray-700">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#returns" className="text-black hover:text-gray-700">
                  Returns
                </a>
              </li>
              <li>
                <a href="#privacy-policies" className="text-black hover:text-gray-700">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-400 uppercase text-sm mb-2">Newsletter</h3>
            <form className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full sm:w-auto border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-gray-500 text-sm text-center">
          <p>2023 Funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
