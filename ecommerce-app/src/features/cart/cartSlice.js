import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
  
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

  
    decreaseQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // remove item if quantity becomes 0
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },


    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => Number(item.id) !== Number(action.payload)
      );

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

  
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});


export const {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;