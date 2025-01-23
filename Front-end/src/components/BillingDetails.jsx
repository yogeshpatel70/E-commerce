import React from "react";

const BillingDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-6 lg:p-16 gap-8 bg-gray-50 min-h-screen">
      {/* Billing Form */}
      <div className="flex-1 bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Billing details</h2>
        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="text"
            placeholder="Company Name (Optional)"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="Sri Lanka"
          >
            <option>Sri Lanka</option>
            <option>India</option>
            <option>USA</option>
          </select>
          <input
            type="text"
            placeholder="Street Address"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Town / City"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="Western Province"
          >
            <option>Western Province</option>
            <option>Central Province</option>
            <option>Eastern Province</option>
          </select>
          <input
            type="text"
            placeholder="ZIP Code"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Additional Information"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </form>
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-1/3 bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Product</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Assigned Sofa x 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>Rs. 250,000.00</span>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <div>
            <input
              type="radio"
              id="bank"
              name="payment"
              className="mr-2"
              defaultChecked
            />
            <label htmlFor="bank">Direct Bank Transfer</label>
            <p className="text-sm text-gray-600 mt-1">
              Make your payment directly into our bank account. Use your Order
              ID as the payment reference. Your order will not be shipped until
              the funds have cleared in our account.
            </p>
          </div>
          <div>
            <input type="radio" id="cod" name="payment" className="mr-2" />
            <label htmlFor="cod">Cash on Delivery</label>
          </div>
        </div>
        <button className="w-full mt-6 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default BillingDetails;
