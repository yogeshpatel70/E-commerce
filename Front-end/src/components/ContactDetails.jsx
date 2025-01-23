import React from "react";

const ContactDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start p-6 lg:p-16 bg-gray-50 min-h-screen">
      {/* Contact Information */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-3xl font-bold mb-4">Get In Touch With Us</h1>
        <p className="text-gray-600 mb-8">
          For more information about our products & services, please feel free
          to drop us an email. Our staff is always here to help you out. Do not
          hesitate!
        </p>
        <div className="space-y-6">
          <div className="flex items-start">
            <span className="text-xl text-blue-600 mr-4">📍</span>
            <div>
              <h3 className="text-lg font-medium">Address</h3>
              <p className="text-gray-600">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-xl text-blue-600 mr-4">📞</span>
            <div>
              <h3 className="text-lg font-medium">Phone</h3>
              <p className="text-gray-600">Mobile: (+84) 546-6789</p>
              <p className="text-gray-600">Hotline: (+84) 456-6789</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-xl text-blue-600 mr-4">⏰</span>
            <div>
              <h3 className="text-lg font-medium">Working Time</h3>
              <p className="text-gray-600">Monday-Friday: 9:00 - 22:30</p>
              <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full lg:w-1/2 bg-white shadow-md rounded-md p-6">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Subject (This is optional)"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button className="w-full p-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactDetails;
