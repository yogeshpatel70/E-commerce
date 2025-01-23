import React from "react";
import Item from "./Item";

const ItemGrid = ({ items, view }) => {
  return view === "grid" ? (
    <div
      className="container mx-auto px-4 py-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      style={{ maxWidth: "1236px", marginTop: "17px" }}
    >
      {items.map((item, index) => (
        <div key={index} className="w-full">
          <Item item={item} />
        </div>
      ))}
    </div>
  ) : (
    <div
      className="container mx-auto px-4 py-6 flex flex-col gap-5"
      style={{ maxWidth: "1236px", marginTop: "17px" }}
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-4 p-4 border rounded-lg shadow-sm">
          <img
            src={item.image}
            alt={item.name}
            className="w-32 h-32 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <p className="font-bold text-lg">${item.discountedPrice}</p>
            {item.originalPrice && (
              <p className="line-through text-gray-500 text-sm">
                ${item.originalPrice}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;

