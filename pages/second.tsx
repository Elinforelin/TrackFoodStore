import { FC } from "react";
import { Header } from "../src/components/Header";
import { Menu } from "../src/components/Menu";
import { secondDish } from "../src/constant/product";
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
