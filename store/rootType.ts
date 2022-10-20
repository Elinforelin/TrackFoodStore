import { ISShoppingCart } from "./shoppingCart/type";
import { SettlementsState } from "./userForm/type";
export type RootStateType = {
  shoppingCart: ISShoppingCart;
  settelments: SettlementsState;
};
