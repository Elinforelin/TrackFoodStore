import { Dispatch, FC, SetStateAction } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  CardMedia,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";

import classes from "./styles.module.scss";
import { MenuListItem } from "../../store/shoppingCart/type";
import { useShoppingCartItem } from "./useShoppingCartItem";

export type ShoppingCartItemProps = {
  item: MenuListItem;
  quantitiOfProduct: number;
  setQuantitiOfProduct: Dispatch<SetStateAction<number>>;
};

export const ShoppingCartItem: FC<ShoppingCartItemProps> = ({ item }) => {
  const {
    onClickAdd,
    onClickDeleteItemFromCart,
    onChangeCount,
    onClickRemove,
    amountOfProduct,
    inputIsEmpty,
    onBlurdHandler,
  } = useShoppingCartItem({ item });

  return (
    <li key={item.id} className={classes.item}>
      <div className={classes.description}>
        <div className={classes.itemImage}>
          <CardMedia component="img" alt="food" image={item.img.src} />
        </div>
        <div className={classes.info}>
          <div className={classes.name}>{item.name}</div>
          <div className={classes.price}>{item.price}грн</div>
          <div className={classes.options}>
            {item.options &&
              item.options.map((opt) => (
                <FormControlLabel
                  key={opt.name}
                  style={{
                    textAlign: "center",
                    fontFamily: "Montserrat",
                    padding: 0,
                    margin: 0,
                  }}
                  classes={{ root: classes.FormControlLabelRoot }}
                  value={opt.name}
                  id={item.id}
                  control={
                    <Checkbox
                      defaultChecked={opt.enable ? true : false}
                      id={item.id}
                      disabled
                    />
                  }
                  label={opt.name}
                />
              ))}
          </div>
          <div
            className={inputIsEmpty ? classes.warning : classes.hiddenWarning}
          >
            відпускається у кількості не менше 1 одиниц
          </div>
        </div>
      </div>

      <div className={classes.controlButtons}>
        <div>
          <div className={classes.addAndRemoveBtn}>
            <Button
              classes={{ outlined: classes.buttonOutlinedAdd }}
              variant="outlined"
              onClick={() => onClickAdd(item)}
            >
              <AddIcon />
            </Button>
            <div className={classes.inputAndAplyControl}>
              <TextField
                type="text"
                variant="standard"
                value={amountOfProduct}
                classes={{ root: classes.textFieldRoot }}
                onChange={(e) => onChangeCount(e, item)}
                id={item.id}
                onBlur={onBlurdHandler}
              />
            </div>
            <Button
              onClick={() => onClickRemove(item.id)}
              disabled={+amountOfProduct === 1}
              variant="outlined"
              classes={{ outlined: classes.buttonOutlinedRemove }}
            >
              <RemoveIcon />
            </Button>
          </div>
        </div>

        <div>{item.summary} грн</div>

        <Button
          onClick={() => onClickDeleteItemFromCart(item.orderIdWithOptionsId)}
          variant="contained"
          classes={{ contained: classes.buttonContainedDelete }}
        >
          <CloseIcon />
        </Button>
      </div>
      <hr className={classes.hr} />
    </li>
  );
};
