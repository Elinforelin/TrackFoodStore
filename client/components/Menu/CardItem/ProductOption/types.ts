import { MouseEventHandler } from "react";
import { MenuListItemOption } from "../../../../store/shoppingCart/type";

export type ProductOptionProps = {
  opt: MenuListItemOption;
  id: string;
  selectOption: MouseEventHandler<HTMLButtonElement>;
};
