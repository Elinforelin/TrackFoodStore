import { FC } from "react";

import classes from "./styles.module.scss";
import { MenuListItem } from "../../store/shoppingCart/type";
import { CardItem } from "./CardItem";

type MenuListProps = {
  menuList: MenuListItem[];
  title: string;
};

export const Menu: FC<MenuListProps> = ({ menuList, title }) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.menuList}>
        {menuList.map((item) => (
          <CardItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
