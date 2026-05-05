import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "./productAPI";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => await fetchProducts()
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      });
  },
});

export default productSlice.reducer;