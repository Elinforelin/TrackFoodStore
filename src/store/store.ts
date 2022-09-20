import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSlice from "./shoppingCart/reducer";
import { createWrapper } from "next-redux-wrapper";
import settlementsSlice from "./userForm/reducer";
import { useDispatch } from "react-redux";

const makeStore = () =>
  configureStore({
    reducer: {
      shoppingCart: shoppingCartSlice,
      settelments: settlementsSlice,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore);
