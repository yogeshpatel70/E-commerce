import React from "react";

const BlogPagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-6 mb-7">

      <button
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
        disabled={currentPage === 1}
      >
        Previous
      </button>


      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-3 py-1 rounded ${currentPage === index + 1
            ? "bg-yellow-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
        >
          {index + 1}
        </button>
      ))}


      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default BlogPagination;
