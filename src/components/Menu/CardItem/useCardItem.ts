import { MouseEventHandler, useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../../../store/shoppingCart/reducer";
import { MenuListItem } from "../../../store/shoppingCart/type";
import { appropriateOptionId, generateId } from "../../../utils/utils";

export const useCardItem = () => {
  const dispatch = useDispatch();
  const [openId, setOpenId] = useState("");
  const [selectedFood, setSelectedFood] = useState<MenuListItem | null>(null);
  const [isIncludeMeat, setIsIncludeMeat] = useState<boolean>(false);

  const handleClick = (item: MenuListItem) => {
    setSelectedFood(item);

    setOpenId((prev) => (prev === item.id ? "" : item.id));
    if (!openId) {
      setIsIncludeMeat(false);
    }
  };

  const selectOption: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { checked, value } = e.target as HTMLInputElement;

    if (value === "М'ясо" && checked === true) {
      setIsIncludeMeat(true);
    } else if (value === "М'ясо" && checked === false) {
      setIsIncludeMeat(false);
    }

    if (selectedFood !== null) {
      setSelectedFood((obj) => {
        if (!obj) return null;

        return {
          ...obj,
          price: value === "М'ясо" && checked === true ? obj.price + 15 : 50,
          options: obj.options
            ? obj.options.map((item) =>
                item.name !== value ? item : { ...item, enable: !item.enable }
              )
            : undefined,
        };
      });
    }
  };

  const addToCartHandler = (item: MenuListItem) => {
    if (selectedFood === null) {
      return dispatch(
        addToCart({
          ...item,
          id: generateId(),
          orderIdWithOptionsId: appropriateOptionId(item),
        })
      );
    }
    dispatch(
      addToCart({
        ...selectedFood,
        orderIdWithOptionsId: appropriateOptionId(selectedFood),
        id: generateId(),
      })
    );
  };

  return {
    handleClick,
    selectOption,
    addToCartHandler,
    isIncludeMeat,
    openId,
    selectedFood,
  };
};
