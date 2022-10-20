import { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { generateId } from "../../utils/utils";
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from "../../store/shoppingCart/reducer";
import { MenuListItem } from "../../store/shoppingCart/type";

export const useShoppingCartItem = (item: {
  id: string;
  list: MenuListItem[];
}) => {
  const dispatch = useDispatch();
  const [amountOfProduct, setAmountOfProduct] = useState<string>(
    String(item.list.length)
  );

  useEffect(() => {
    setAmountOfProduct(String(item.list.length));
  }, [item]);

  const [inputIsEmpty, setInputIsEmpty] = useState(false);

  const onClickAdd = (item: MenuListItem) => {
    dispatch(
      addToCart({
        ...item,
        id: generateId(),
      })
    );
  };

  const onClickRemove = (item: { id: string; list: MenuListItem[] }) => {
    dispatch(removeFromCart(item.id));
  };

  const onChangeCount = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAmountOfProduct(e.target.value);

    if (!e.target.value) {
      setInputIsEmpty(true);
    } else {
      setInputIsEmpty(false);
    }

    const regex = /^\d*\.?\d*$/;

    if (!regex.test(e.target.value)) {
      setAmountOfProduct("");
    }
  };

  const onClickDeleteItemFromCart = (orderIdWithOptionsId: string) => {
    dispatch(deleteFromCart(orderIdWithOptionsId));
  };

  const onBlurdHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      if (item.list.length) {
        setAmountOfProduct(String(item.list.length));
      }
      return;
    } else {
      setInputIsEmpty(false);

      const difference = +amountOfProduct - item.list.length;
      if (difference > 0) {
        for (let i = 0; i < difference; i++) {
          dispatch(
            addToCart({
              ...item.list[0],
              id: generateId(),
            })
          );
        }
      } else {
        for (let i = 0; i < Math.abs(difference); i++) {
          dispatch(removeFromCart(item.id));
        }
      }
    }
  };

  return {
    onClickAdd,
    onClickDeleteItemFromCart,
    onChangeCount,
    onClickRemove,
    amountOfProduct,
    inputIsEmpty,
    onBlurdHandler,
  };
};
