import React, { useState } from "react";
import BlogCard from "./Blogs/BlogCard";
import SideBar from "./Blogs/SideBar";
import BlogPagination from "./Blogs/BlogPagination";

const BlogPage = () => {
  const blogs = [
    {
      title: "Going all-in with millennial design",
      excerpt: "Discover the modern techniques reshaping millennial design.",
      image: "Images2/dining.png",
      date: "Jan 20, 2025",
      author: "Admin",
      readTime: 5,
    },
    {
      title: "Going all-in with millennial design",
      excerpt: "Discover the modern techniques reshaping millennial design.",
      image: "Images2/dining.png",
      date: "Jan 20, 2025",
      author: "Admin",
      readTime: 5,
    },
    {
      title: "Going all-in with millennial design",
      excerpt: "Discover the modern techniques reshaping millennial design.",
      image: "Images2/dining.png",
      date: "Jan 20, 2025",
      author: "Admin",
      readTime: 5,
    },
    {
      title: "Going all-in with millennial design",
      excerpt: "Discover the modern techniques reshaping millennial design.",
      image: "Images2/dining.png",
      date: "Jan 20, 2025",
      author: "Admin",
      readTime: 5,
    },
    {
      title: "Going all-in with millennial design",
      excerpt: "Discover the modern techniques reshaping millennial design.",
      image: "Images2/dining.png",
      date: "Jan 20, 2025",
      author: "Admin",
      readTime: 5,
    },
    {
      title: "Going all-in with millennial design",
      excerpt: "Discover the modern techniques reshaping millennial design.",
      image: "Images2/dining.png",
      date: "Jan 20, 2025",
      author: "Admin",
      readTime: 5,
    },
    {
      title: "Going all-in with millennial design",
      excerpt: "Discover the modern techniques reshaping millennial design.",
      image: "Images2/dining.png",
      date: "Jan 20, 2025",
      author: "Admin",
      readTime: 5,
    },


  ];

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const currentBlogs = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <div className="p-6 lg:p-16 bg-gray-100">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          {currentBlogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
          <div className="mt-8">
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>

        <SideBar />
      </div>

    </div>
  );
};

export default BlogPage;
