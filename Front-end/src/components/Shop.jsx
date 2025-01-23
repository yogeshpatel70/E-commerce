// Shop.js
import React, { useState } from "react";
import ShopHeader from "../shopcomponents/ShopHeader";
import FilterBar from "../shopcomponents/FilterBar";
import Items from "../shopcomponents/Items";
import FeaturesBar from "./FeaturesBar";

const Shop = () => {
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("default");
  const [filters, setFilters] = useState({
    priceRange: [250000, 16000000],
    discount: 0,
    isFilter: false,
  });

  return (
    <>
      <ShopHeader headerName={"shop"} />
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        setSort={setSort}
        view={view}
        setView={setView}
      />
      <Items filters={filters} view={view} sort={sort} />
      <FeaturesBar />
    </>
  );
};

export default Shop;
