import { createSlice } from "@reduxjs/toolkit";
import { ISShoppingCart } from "./type";

const initialState: ISShoppingCart = {
  shoppingCartList: [],
  quantiti: 0,
};

const shoppingCartSlice = createSlice({
  name: "foodContainer",
  initialState,
  reducers: {
    addToCart(state, action) {
      const productInCart = state.shoppingCartList.find(
        (prod) => prod.id === action.payload.orderIdWithOptionsId
      );

      if (productInCart) {
        productInCart?.list.push(action.payload);
        state.quantiti = state.quantiti + 1;
        return;
      }

      return {
        ...state,
        quantiti: state.quantiti + 1,
        shoppingCartList: [
          ...state.shoppingCartList,
          { id: action.payload.orderIdWithOptionsId, list: [action.payload] },
        ],
      };
    },
    removeFromCart(state, action) {
      const productInCart = state.shoppingCartList.find(
        (prod) => prod.id === action.payload
      );
      console.log(action.payload, productInCart);

      if (productInCart) {
        productInCart?.list.pop();
        state.quantiti = state.quantiti - 1;
        return;
      }
    },

    deleteFromCart(state, action) {
      console.log(action.payload);

      const shoppingCartListLength = state.shoppingCartList.find(
        (item) => item.id === action.payload
      )?.list.length;

      if (shoppingCartListLength) {
        state.quantiti = state.quantiti - shoppingCartListLength;
      }

      state.shoppingCartList = state.shoppingCartList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
