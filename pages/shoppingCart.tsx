import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

import { Header } from "../components/Header";
import { selectShoppingCart } from "../store/shoppingCart/select";
import classes from "../styles/ShoppingCart.module.scss";
import emptyCart from "../public/assets/emptyCart/emptyCart.png";
import { ShoppingCartItem } from "../components/ShoppingCartItem";

const ShoppingCart: FC = () => {
  const router = useRouter();
  const shoppingCart = useSelector(selectShoppingCart);

  const onClickPushtoFormPage = () => router.push("/userForm");

  const total = useMemo(() => {
    return shoppingCart
      .map(({ list }) => list.reduce((acc, next) => acc + next.price, 0))
      .reduce((acc, next) => acc + next, 0);
  }, [shoppingCart]);

  return (
    <div className={classes.wrapper}>
      <Header />
      {!shoppingCart.length ? (
        <div>
          <h1 className={classes.title}>Кошик порожній</h1>
          <div className={classes.emptyCartBox}>
            <img
              className={classes.emptyCartImg}
              src={emptyCart.src}
              alt="Empty cart"
            />
          </div>
        </div>
      ) : (
        <>
          <ul className={classes.shoppingCartList}>
            {shoppingCart.map((item) => (
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
