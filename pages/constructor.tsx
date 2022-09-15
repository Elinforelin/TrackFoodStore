import { FC } from "react";
import { Header } from "../src/components/Header";

import classes from "../styles/Constructor.module.scss";

const Constructor: FC = () => {
  return (
    <div>
      <Header />
      <div className={classes.constructor}>
        <div className={classes.field}></div>
        <div className={classes.options}></div>
      </div>
    </div>
  );
};

export default Constructor;
