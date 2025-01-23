import React from "react";

const Comparison = () => {
  const products = [
    {
      title: "Asgaard Sofa",
      price: "Rs. 250,000.00",
      rating: "4.7",
      reviews: "125",
      image: "Images2/homefirst.jpg", // Replace with actual image URL
      details: {
        "Sales Package": "1 Sectional Sofa",
        "Model Number": "TBSLCU35-59BS15",
        "Secondary Material": "Solid Wood",
        "Configuration": "L-shaped",
        "Upholstery Material": "Fabric + Cotton",
        "Upholstery Color": "Bright Grey & Lion",
        "Filling Material": "Foam",
        "Frame Type": "Bright Grey & Lion",
        "Adjustable Headrest": "No",
        "Maximum Load Capacity": "280 KG",
        "Origin of Manufacture": "India",
        Width: "295.23 cm",
        Height: "79 cm",
        Depth: "157.65 cm",
        "Seat Height": "41.82 cm",
        "Seat Width": "54.64 cm",
        "Warranty Summary": "1 Year Manufacturing Warranty",
        "Warranty Service Type": "Warranty Applied: Manufacturing Defect",
        "Covered in Warranty":
          "Warranty applies for any manufacturing defects.",
        "Not Covered in Warranty":
          "The Warranty Does Not Cover the Damage Due to Improper Usage.",
      },
    },
    {
      title: "Outdoor Sofa Set",
      price: "Rs. 270,000.00",
      rating: "4.9",
      reviews: "95",
      image: "Images2/dining.png", // Replace with actual image URL
      details: {
        "Sales Package": "1 Three-Seater, 2 Single Seaters",
        "Model Number": "TBO3LNCU25-45BS20",
        "Secondary Material": "Solid Wood",
        "Configuration": "L-shaped",
        "Upholstery Material": "Fabric + Cotton",
        "Upholstery Color": "Bright Grey & Lion",
        "Filling Material": "Mistra",
        "Frame Type": "Bright Grey & Lion",
        "Adjustable Headrest": "Yes",
        "Maximum Load Capacity": "300 KG",
        "Origin of Manufacture": "India",
        Width: "285.62 cm",
        Height: "79 cm",
        Depth: "157.65 cm",
        "Seat Height": "41.82 cm",
        "Seat Width": "54.64 cm",
        "Warranty Summary": "1 Year Manufacturing Warranty",
        "Warranty Service Type": "Warranty Applied: Manufacturing Defect",
        "Covered in Warranty":
          "Warranty applies for any manufacturing defects.",
        "Not Covered in Warranty":
          "The Warranty Does Not Cover the Damage Due to Improper Usage.",
      },
    },
  ];

  return (
    <div className="max-w-[1332px] mx-auto  p-4 bg-white">

      <div className="flex justify-between items-center pb-4 border-b">
        <button className="text-blue-600 underline">
          Go to Product Page for more Products
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow">
          Choose Product
        </button>
      </div>


      <div className="grid grid-cols-2 gap-4 py-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-gray-50"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-40 h-40 object-contain"
            />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-yellow-600 font-medium">{product.price}</p>
            <p className="text-gray-500 text-sm">
              {product.rating} ⭐ ({product.reviews} reviews)
            </p>
          </div>
        ))}
      </div>


      <table className="w-full border-collapse border border-gray-200 text-sm text-left">
        <thead>
          <tr>
            <th className="p-4 bg-gray-100 font-medium text-gray-700">Feature</th>
            {products.map((product, index) => (
              <th
                key={index}
                className="p-4 bg-gray-100 font-medium text-gray-700"
              >
                {product.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(products[0].details).map((feature, i) => (
            <tr key={i} className="border-t border-gray-200">
              <td className="p-4 font-medium text-gray-700">{feature}</td>
              {products.map((product, index) => (
                <td key={index} className="p-4 text-gray-600">
                  {product.details[feature]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>


      <div className="grid grid-cols-2 gap-4 py-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center border rounded-lg shadow-md p-4 bg-gray-50"
          >
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comparison;
