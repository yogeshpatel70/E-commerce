import React from "react";

const SideBar = () => {
  return (
    <div className="w-full lg:w-1/3">
      {/* Categories */}
      <div className="mb-8 bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <ul className="space-y-2">
          {["Creative", "Design", "Inspiration", "Lifestyle", "Work"].map(
            (category, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-700 hover:text-yellow-500 transition-colors"
                >
                  {category} <span className="text-gray-400">(3)</span>
                </a>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
        <ul className="space-y-4">
          {["New Design Trends", "Handmade Pieces", "Creative Art"].map(
            (post, index) => (
              <li key={index} className="flex items-center gap-4">
                <img
                  src="Images2/dining.png"
                  alt={post}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <a
                  href="#"
                  className="text-gray-700 hover:text-yellow-500 transition-colors"
                >
                  {post}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
