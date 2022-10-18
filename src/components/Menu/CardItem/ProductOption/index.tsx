import { Checkbox, FormControlLabel } from "@mui/material";
import { FC, MouseEventHandler } from "react";
import { MenuListItemOption } from "../../../../store/shoppingCart/type";

import classes from "./styles.module.scss";

type ProductOptionProps = {
  opt: MenuListItemOption;
  id: string;
  selectOption: MouseEventHandler<HTMLButtonElement>;
};

export const ProductOption: FC<ProductOptionProps> = ({
  opt,
  id,
  selectOption,
}) => {
  return (
    <FormControlLabel
      key={opt.name}
      style={{
        textAlign: "center",
        fontFamily: "Montserrat",
      }}
      classes={{ root: classes.FormControlLabelRoot }}
      value={opt.name}
      id={id}
      control={
        <Checkbox
          defaultChecked={opt.enable}
          onClick={selectOption}
          id={id}
          color="default"
        />
      }
      label={opt.name}
    />
  );
};
