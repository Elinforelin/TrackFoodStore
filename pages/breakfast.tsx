import { FC } from "react";
import { Header } from "../src/components/Header";
import { Menu } from "../src/components/Menu";
import { sweetPorige } from "../src/constant/product";
import classes from "../styles/Home.module.css";

const Breakfast: FC = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Menu menuList={sweetPorige} title="Сніданки" />
    </div>
  );
};

export default Breakfast;
