import { FC } from "react";
import { Header } from "../src/components/Header";
import { Menu } from "../src/components/Menu";
import { firstDish } from "../src/constant/product";
import classes from "../styles/Home.module.css";

const FirstDish: FC = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Menu menuList={firstDish} title="Oснові страви" />
    </div>
  );
};

export default FirstDish;
