import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.loader}>
        <Loader
          type="Bars"
          color="#81abab"
          height={60}
          width={60}
          timeout={3000}
        />
      </div>
    );
  }
}
