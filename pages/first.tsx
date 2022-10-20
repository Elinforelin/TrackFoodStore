import { FC } from "react";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { firstDish } from "../constant/product";
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
