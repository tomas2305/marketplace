import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CartAddState {
  id: string | number;
  image: string;
  name: string;
  info: string;
}

interface CartRemoveState {
  id: string | number;
}

// Define the initial state using that type
const initialState: CartAddState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartAddState>) => {
      const { id } = action.payload;
      if (
        state.length === 0 ||
        state.filter((item) => item.id === id).length === 0
      ) {
        state.push(action.payload);
      }
    },
    removeToCart: (state, action: PayloadAction<CartRemoveState>) => {
        const { id } = action.payload;
        if(state.some((item) => item.id === id)){
            return state.filter((item) => item.id !== id);
        }
    },
  },
});

export const {addToCart, removeToCart} = cartSlice.actions;
