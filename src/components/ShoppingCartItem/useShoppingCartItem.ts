import { ChangeEvent, FocusEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateId } from "../../utils/utils";
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from "../../store/shoppingCart/reducer";
import { MenuListItem } from "../../store/shoppingCart/type";
import { selectShoppingCart } from "../../store/shoppingCart/select";

export const useShoppingCartItem = ({ item }: { item: MenuListItem }) => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(selectShoppingCart);
  const [amountOfProduct, setAmountOfProduct] = useState<string>(
    String(item.counter)
  );
  const [inputIsEmpty, setInputIsEmpty] = useState(false);
  const onClickAdd = (item: MenuListItem) => {
    setAmountOfProduct((prev) => String(+prev + 1));
    dispatch(
      addToCart({
        ...item,
        id: generateId(),
      })
    );
  };

  const onClickRemove = (id: string) => {
    setAmountOfProduct((prev) => String(+prev - 1));
    dispatch(removeFromCart(id));
  };

  const onChangeCount = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    item: MenuListItem
  ) => {
    console.log(e.target.value);
    setAmountOfProduct(e.target.value);
    if (!e.target.value) {
      return setInputIsEmpty(true);
    }

    const regex = /^\d*\.?\d*$/;

    if (!regex.test(e.target.value)) {
      return setAmountOfProduct("");
    }

    const shoppingCartIncludesItemLength = shoppingCart.filter(
      (obj) => obj.orderIdWithOptionsId === item.orderIdWithOptionsId
    ).length;

    setInputIsEmpty(false);

    const difference = +amountOfProduct - shoppingCartIncludesItemLength;

    if (difference > 0) {
      for (let i = 0; i < difference; i++) {
        dispatch(
          addToCart({
            ...item,
            id: generateId(),
          })
        );
      }
    } else {
      for (let i = 0; i < Math.abs(difference); i++) {
        dispatch(removeFromCart(item.id));
      }
    }
  };

  const onClickDeleteItemFromCart = (orderIdWithOptionsId: string) => {
    dispatch(deleteFromCart(orderIdWithOptionsId));
  };

  const onBlurdHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      if (typeof item.counter !== "undefined") {
        setAmountOfProduct(String(item.counter));
      }
    } else {
      setAmountOfProduct(e.target.value);
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
