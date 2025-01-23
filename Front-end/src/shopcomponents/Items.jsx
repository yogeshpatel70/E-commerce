import React, { useState, useEffect } from "react";
import ItemGrid from "./ItemGrid";
import Pagination from "./Pagination";
import { getData } from "../api/api";


const Items = ({ filters, view, sort }) => {
  const itemsPerPage = 12;
  // console.log(filters)
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const fetchItems = async (filters, sort, page, limit) => {
    const response = await getData(filters, sort, page, limit)

    setItems(response.data.products);
    setTotalPages(Math.ceil(response.data.total / itemsPerPage));
  }

  useEffect(() => {
    fetchItems(filters, sort, currentPage, itemsPerPage);
  }, [currentPage, sort, filters]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col items-center">

      <ItemGrid items={items} view={view} />


      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Items;
