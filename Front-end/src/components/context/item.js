import { createSlice } from "@reduxjs/toolkit";
import { getDataById } from "../../api/api";


export const fetchProductById = (id) => async (dispatch) => {
  try {
    const response = await getDataById(id);

    dispatch(setSingleProduct(response.data.data));
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};


const initialState = {
  data: {},
  singleProduct: {},
  cart: [],
};


const itemsByIdSlice = createSlice({
  name: "itemsById",
  initialState,
  reducers: {
    setSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
    },
    addItemToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { setSingleProduct, addItemToCart } = itemsByIdSlice.actions;

export const selectSingleProduct = (state) => state.itemsById.singleProduct;

export default itemsByIdSlice;
