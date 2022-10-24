import { FC } from "react";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { secondDish } from "../../constant/product";

const SecondDish: FC = () => {
  return (
    <div>
      <Header />
      <Menu menuList={secondDish} title="Другі страви" />
    </div>
  );
};

export default SecondDish;
