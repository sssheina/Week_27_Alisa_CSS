// import './cat.scss';
import React from "react";

import styles from "./cat.css";

class Cat extends React.Component {
  render() {
    const { name, img, text, isSelected } = this.props;
    return (
      <div className={"card" + (isSelected ? "selected" : "")}>
        <img className={styles.pic} src={img} alt="cat"></img>
        <div className={styles.name}>{name}</div>
        <div className={styles.text}>
          Центральное понятие в React – компонент. Вся остальная
          функциональность построена вокруг него
        </div>
        <div className={styles.text}>{text}</div>
        <button className={styles.button}>Взять домой</button>
      </div>
    );
  }
}

export default Cat;
