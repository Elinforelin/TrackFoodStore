import { Button } from "@mui/material";
import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import classes from "./styles.module.scss";
import { HeaderShoppingCartIcon } from "./HeaderShoppingCartIcon";
import { headerButtons } from "../../constant/headerPath";

export const Header: FC = () => {
  const { pathname, back } = useRouter();

  return (
    <div className={classes.headerContainer}>
      {pathname === "/shoppingCart" ? (
        <div className={classes.shoppingCartHeaderNavigation}>
          <Button className={classes.arrowBackIcon} onClick={back}>
            <ArrowBackIcon />
          </Button>
          <h3 className={classes.shoppingCartTitle}>Кошик</h3>
        </div>
      ) : (
        <>
          <div className={classes.headerTrackFood}>
            <h2>
              <span>Track</span>Food
            </h2>
            <HeaderShoppingCartIcon />
          </div>
          <ul className={classes.linksContainer}>
            {headerButtons.map((btn) => (
              <li
                key={btn.href}
                className={
                  pathname === btn.href
                    ? `${classes.link} ${classes.active}`
                    : `${classes.link}`
                }
              >
                <Link href={btn.href}>{btn.name}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
