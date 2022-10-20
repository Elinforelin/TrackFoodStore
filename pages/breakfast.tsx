import { FC } from "react";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { sweetPorige } from "../constant/product";
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
