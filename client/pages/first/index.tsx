import { FC } from "react";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { firstDish } from "../../constant/product";

const FirstDish: FC = () => {
  return (
    <div>
      <Header />
      <Menu menuList={firstDish} title="Oснові страви" />
    </div>
  );
};

export default FirstDish;
