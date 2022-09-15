import { Button } from "@mui/material";
import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import classes from "./styles.module.scss";
import { HeaderShoppingCartIcon } from "./HeaderShoppingCartIcon";

const headerButtons = [
  { href: "/first", name: "Основні страви" },
  { href: "/second", name: "Супи" },
  { href: "/breakfast", name: "Сніданки" },
  { href: "/constructor", name: "Конструктор" },
];

export const Header: FC = () => {
  const { pathname, back } = useRouter();

  const onClickPrevPage = () => back();

  return (
    <div className={classes.headerContainer}>
      {pathname === "/shoppingCart" ? (
        <div className={classes.shoppingCartHeaderNavigation}>
          <Button className={classes.arrowBackIcon} onClick={onClickPrevPage}>
            <ArrowBackIcon />
          </Button>
          <h3 className={classes.shoppingCartTitle}>Кошик</h3>
        </div>
      ) : (
        <>
          <HeaderShoppingCartIcon />
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
