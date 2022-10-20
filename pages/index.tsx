import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";

import FirstDish from "./first";
import SecondDish from "./second";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <FirstDish />
      <SecondDish />
    </div>
  );
};

export default Home;
