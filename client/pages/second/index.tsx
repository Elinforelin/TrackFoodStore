import { NextPage } from "next";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { secondDish } from "../../constant/product";

const SecondDish: NextPage = () => {
  return (
    <div>
      <Header />
      <Menu menuList={secondDish} title="Другі страви" />
    </div>
  );
};

export default SecondDish;
