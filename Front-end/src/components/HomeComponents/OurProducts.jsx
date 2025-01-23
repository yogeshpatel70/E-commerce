import React, { useEffect, useState } from 'react';
import OurProductList from './OurProductList';
import { useNavigate } from 'react-router-dom';

import { useStepContext } from '@mui/material';
import { getOurData } from '../../api/Api';


const OurProducts = ({ Data }) => {
  const navigate = useNavigate();
  const handleSeeMore = () => {
    navigate('/shop');
  };
  const [products, setProducts] = useState([]);
  const handleFetchProducts = async () => {
    const res = await getOurData(1, 8);
    setProducts(res.data.products);
  }
  useEffect(() => {
    handleFetchProducts();
  }, [])
  return (

    <div className="w-full py-8 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">{`${Data ? Data : "Our Products"}`}</h2>
      </div>

      <OurProductList products={products} />

      <div className="flex justify-center mt-8">
        <button
          onClick={() => { handleSeeMore() }}
          className="px-6 py-3 text-white bg-yellow-600 rounded-lg hover:bg-yellow-700"
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default OurProducts;