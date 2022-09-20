import { FC, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { Header } from "../src/components/Header";
import { selectShoppingCart } from "../src/store/shoppingCart/select";
import classes from "../styles/ShoppingCart.module.scss";

import emptyCart from "../src/assets/emptyCart/emptyCart.png";
import { ShoppingCartItem } from "../src/components/ShoppingCartItem";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";

const ShoppingCart: FC = () => {
  const router = useRouter();
  const shoppingCart = useSelector(selectShoppingCart);
  // const [quantitiOfProduct, setQuantitiOfProduct] = useState<number>(1);
  const [total, setTotal] = useState(0);
  const shoppingCartWithCounter = useMemo(() => {
    setTotal(0);
    const updatedArray = shoppingCart.map((obj) => {
      const numberOfProduct = shoppingCart.filter(
        (item) => item.orderIdWithOptionsId === obj.orderIdWithOptionsId
      ).length;

      return {
        ...obj,
        counter: numberOfProduct,
        summary: obj.price * numberOfProduct,
      };
    });
    const uniqueIds: string[] = [];
    const unique = updatedArray.filter((el) => {
      if (el.orderIdWithOptionsId) {
        const isDuplicate = uniqueIds.includes(el.orderIdWithOptionsId);
        if (!isDuplicate) {
          setTotal((prev) => prev + el.summary);
          uniqueIds.push(el.orderIdWithOptionsId);
          return true;
        }
      }
      return false;
    });
    return unique;
  }, [shoppingCart]);

  const onClickPushtoFormPage = () => router.push("/userForm");

  return (
    <div className={classes.wrapper}>
      <Header />
      {!shoppingCartWithCounter.length ? (
        <div>
          <h1 className={classes.title}>Кошик порожній</h1>
          <div className={classes.imageEmptyCart}>
            <Image src={emptyCart.src} alt="" />
          </div>
        </div>
      ) : (
        <>
          <ul className={classes.shoppingCartList}>
            {shoppingCartWithCounter.map((item) => (
              <ShoppingCartItem key={item.id} item={item} />
            ))}
          </ul>
          <div className={classes.confirmAndTotal}>
            <Button onClick={onClickPushtoFormPage} variant="contained">
              Підтвердити замовлення
            </Button>
            <div>{total}грн</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
