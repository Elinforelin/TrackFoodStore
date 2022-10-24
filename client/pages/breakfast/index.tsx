import { FC } from "react";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { sweetPorige } from "../../constant/product";

const Breakfast: FC = () => {
  return (
    <div>
      <Header />
      <Menu menuList={sweetPorige} title="Сніданки" />
    </div>
  );
};

export default Breakfast;
