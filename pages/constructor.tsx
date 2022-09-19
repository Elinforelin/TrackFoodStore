import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FC, useState } from "react";
import { Header } from "../src/components/Header";
import { constructorProduct } from "../src/constant/product";
import { generateId } from "../src/utils/utils";

import classes from "../styles/Constructor.module.scss";

const Constructor: FC = () => {
  const [constructoredProduct, setConstructoredProduct] = useState({
    id: "",
    name: "",
    img: "",
    price: 0,
    orderIdWithOptionsId: "",
    options: [
      { name: "М'ясо", enable: false },
      { name: "Часник", enable: false },
      { name: "Гостре", enable: false },
    ],
  });

  // const onClickBasisHandler = (e) => {
  //   setConstructoredProduct((prev) => {
  //     return { ...prev, name: e.target.value, id: generateId() };
  //   });
  // };

  console.log(constructoredProduct);

  return (
    <div>
      <Header />
      {/* <div className={classes.constructor}>
        <div className={classes.constructorTotal}>Ваш вибір: </div>
        <div className={classes.options}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Оберіть основу
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Каша"
                control={<Radio />}
                label="Каша"
                onClick={onClickBasisHandler}
              />
              <FormControlLabel
                value="Суп"
                control={<Radio />}
                label="Суп"
                onClick={onClickBasisHandler}
              />
            </RadioGroup>
          </FormControl>
          <RadioGroup>
            <FormLabel id="demo-radio-buttons-group-label">Крупа</FormLabel>
            {constructorProduct.porridges.map((item) => (
              <FormControlLabel
                key={item.id}
                style={{
                  textAlign: "center",
                  fontFamily: "Montserrat",
                }}
                classes={{ root: classes.FormControlLabelRoot }}
                value={item.name}
                id={item.id}
                control={<Radio id={item.id} color="default" />}
                label={item.name}
              />
            ))}
          </RadioGroup>

          <div>
            <FormLabel id="demo-radio-buttons-group-label">Овочі</FormLabel>
            {constructorProduct.vegetables.map((item) => (
              <FormControlLabel
                style={{
                  textAlign: "center",
                  fontFamily: "Montserrat",
                }}
                classes={{ root: classes.FormControlLabelRoot }}
                value={item.name}
                id={item.id}
                control={<Checkbox id={item.id} color="default" />}
                label={item.name}
              />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Constructor;
