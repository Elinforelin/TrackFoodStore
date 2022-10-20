import { MenuListItem } from "../store/shoppingCart/type";

export const generateId = () => {
  return Math.random().toString(36).slice(-8);
};

export const appropriateOptionId = (item: MenuListItem) => {
  const options = item.options;
  const optionNames: string[] = [];
  if (options) {
    options.forEach((opt) => {
      if (opt.enable === true) {
        optionNames.push(opt.name);
      }
    });
  }
  return !optionNames.length ? item.id : item.id + optionNames.join("");
};
