import { configureStore } from "@reduxjs/toolkit";
import itemsByIdSlice from "./item";
// Path to your slice file

const store = configureStore({
  reducer: {
    itemsById: itemsByIdSlice.reducer, // Add the reducer here
  },
});

export default store;
