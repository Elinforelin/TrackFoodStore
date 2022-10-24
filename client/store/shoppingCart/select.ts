import { RootStateType } from "../rootType";

export const selectShoppingCart = (state: RootStateType) =>
  state.shoppingCart.shoppingCartList;
export const selectQuantiti = (state: RootStateType) =>
  state.shoppingCart.quantiti;
