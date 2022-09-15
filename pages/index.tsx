import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import { Header } from "../src/components/Header";

import FirstDish from "./first";
import SecondDish from "./second";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <FirstDish />
      <SecondDish />
    </div>
  );
};

export default Home;
