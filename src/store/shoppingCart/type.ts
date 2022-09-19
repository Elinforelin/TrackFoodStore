import { StaticImageData } from "next/image";

export type MenuListItemOption = {
  name: string;
  enable: boolean;
};

export type MenuListItem = {
  id: string;
  orderId?: string;
  name: string;
  img: StaticImageData;
  price: number;
  orderIdWithOptionsId?: string;
  options: MenuListItemOption[];
  counter?: number | undefined;
};

export type ISShoppingCart = {
  shoppingCartList: MenuListItem[];
  // shoppingCartList: Record<
  //   string, // product id
  //   MenuListItem // product
  // >;
  // shoppingCart: {
  //   counter?: number | undefined;
  //   id: string;
  //   name: string;
  //   img: StaticImageData;
  //   price: string;
  //   option: { optionName: string; addTo: boolean }[];
  // }[];
  quantiti: number;
};
