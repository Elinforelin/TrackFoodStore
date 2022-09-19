import { FC } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import { MenuListItem } from "../../../store/shoppingCart/type";
import classes from "./styles.module.scss";
import { ProductOption } from "./ProductOption";
import { useCardItem } from "./useCardItem";

type CardItemProps = {
  item: MenuListItem;
};

export const CardItem: FC<CardItemProps> = ({ item }) => {
  const { handleClick, selectOption, addToCartHandler, isIncludeMeat, openId } =
    useCardItem();

  return (
    <Card
      key={item.id}
      classes={{ root: classes.root }}
      sx={{
        textAlign: "center",
        fontFamily: "Montserrat",
        overflow: "visible",
      }}
    >
      <CardMedia
        style={{
          height: 142,
          width: 142,
        }}
        component="img"
        alt="food"
        image={item.img.src}
      />
      <CardContent
        style={{
          padding: 2,
          fontFamily: "Montserrat",
        }}
      >
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          style={{
            fontFamily: "Montserrat",
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item.name}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          style={{ fontFamily: "Montserrat", marginTop: 10 }}
        >
          {isIncludeMeat && openId === item.id ? item.price + 15 : item.price}
          грн
        </Typography>
        <CardActions
          style={{ justifyContent: "center", overflow: "visible" }}
          classes={{ root: classes.cardActionsRoot }}
        >
          <Button
            style={{
              textAlign: "center",
              fontFamily: "Montserrat",
              lineHeight: 1,
            }}
            size="small"
            onClick={() => addToCartHandler(item)}
          >
            Додати в корзину
          </Button>
          {item.options && (
            <div>
              <div className={classes.option}>
                <ListItemText
                  primary="Додатково"
                  classes={{ root: classes.listItemText }}
                  style={{ fontFamily: "Montserrat" }}
                  onClick={() => handleClick(item)}
                />
                {openId === item.id ? <ExpandLess /> : <ExpandMore />}
              </div>
              <Collapse
                in={openId === item.id}
                timeout="auto"
                unmountOnExit
                classes={{ root: classes.collapseRoot }}
              >
                <ListItemButton
                  sx={{ pl: 4 }}
                  classes={{ root: classes.listItemButtonRoot }}
                >
                  {item.options.map((opt) => (
                    <ProductOption
                      opt={opt}
                      id={item.id}
                      selectOption={selectOption}
                      key={item.name + item.id}
                    />
                  ))}
                </ListItemButton>
              </Collapse>
            </div>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
};
