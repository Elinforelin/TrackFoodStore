import { createSlice } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import { ISShoppingCart } from "./type";

// type IS = {
//   constructedFood: [{ id: number; name: string; img: StaticImageData | "" }];
// };

const initialState: ISShoppingCart = {
  shoppingCartList: [],
  quantiti: 0,
};

const shoppingCartSlice = createSlice({
  name: "foodContainer",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.shoppingCartList.push(action.payload);
      state.quantiti = state.quantiti + 1;
    },
    removeFromCart(state, action) {
      state.quantiti = state.quantiti - 1;

      state.shoppingCartList = state.shoppingCartList.filter(
        (item) => item.id !== action.payload
      );
    },
    deleteFromCart(state, action) {
      const shoppingCartLisLlenth = state.shoppingCartList.filter(
        (item) => item.orderIdWithOptionsId === action.payload
      ).length;
      state.quantiti = state.quantiti - shoppingCartLisLlenth;

      state.shoppingCartList = state.shoppingCartList.filter(
        (item) => item.orderIdWithOptionsId !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
