import { Checkbox, FormControlLabel } from "@mui/material";
import { FC } from "react";

import classes from "./styles.module.scss";
import { ProductOptionProps } from "./types";

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
