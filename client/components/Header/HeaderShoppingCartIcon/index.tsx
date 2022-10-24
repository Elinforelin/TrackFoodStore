import Link from "next/link";
import { FC } from "react";
import { useSelector } from "react-redux";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

import { selectQuantiti } from "../../../store/shoppingCart/select";
import classes from "./styles.module.scss";

export const HeaderShoppingCartIcon: FC = () => {
  const quantiti = useSelector(selectQuantiti);

  return (
    <>
      <div className={classes.shoppingCart}>
        <Link href="/shoppingCart">
          <ShoppingCartTwoToneIcon />
        </Link>
      </div>
      <div className={classes.quantiti}>{quantiti}</div>
    </>
  );
};
