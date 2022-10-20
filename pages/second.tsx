import { FC } from "react";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { secondDish } from "../constant/product";
import classes from "../styles/Home.module.css";

const SecondDish: FC = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Menu menuList={secondDish} title="Другі страви" />
    </div>
  );
};

export default SecondDish;
