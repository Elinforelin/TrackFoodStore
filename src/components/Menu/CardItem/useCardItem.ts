import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/shoppingCart/reducer";
import { MenuListItem } from "../../../store/shoppingCart/type";
import { appropriateOptionId, generatePassword } from "../../../utils/utils";

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
    console.log("onclick");
  };

  const selectOption = (e: MouseEvent) => {
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
          price: value === "М'ясо" ? obj.price + 15 : obj.price,
          options: obj.options.map((item) =>
            item.name !== value ? item : { ...item, enable: !item.enable }
          ),
        };
      });
    }
  };

  const addToCartHandler = (item: MenuListItem) => {
    if (selectedFood === null) {
      return dispatch(
        addToCart({
          ...item,
          id: generatePassword(),
          orderIdWithOptionsId: appropriateOptionId(item),
        })
      );
    }
    dispatch(
      addToCart({
        ...selectedFood,
        orderIdWithOptionsId: appropriateOptionId(selectedFood),
        id: generatePassword(),
      })
    );
  };

  return { handleClick, selectOption, addToCartHandler, isIncludeMeat, openId };
};
