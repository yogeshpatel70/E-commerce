import React from "react";

const BlogCard = ({ title, excerpt, image, date, author, readTime }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{date}</span>
          <span>{readTime} min read</span>
          <span>By {author}</span>
        </div>
        <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
