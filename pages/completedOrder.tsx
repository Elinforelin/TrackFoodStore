import { FC } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Confetti from "react-confetti";

import classes from "../styles/completedOrder.module.scss";
import img from "../public/assets/completedOrder/10606146_9800.jpg";
import { useWindowSize } from "../hooks/useWindowSize";

const completedOrder: FC = () => {
  const { width, height } = useWindowSize();

  const router = useRouter();

  const onClickBackToMenu = () => {
    router.push("/first");
  };

  return (
    <div className={classes.container}>
      <Confetti
        width={width}
        height={height}
        tweenDuration={5000}
        recycle={false}
      />
      <h2 className={classes.title}>Дякую за замовлення!</h2>
      <Button onClick={onClickBackToMenu}>Повернутись до каталогу</Button>
      <div className={classes.img}>
        <img src={img.src} alt="hiking" />
      </div>
    </div>
  );
};

export default completedOrder;
