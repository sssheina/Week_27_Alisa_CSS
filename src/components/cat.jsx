// import './cat.scss';
import React from "react";

import cat from "./cat.css";

class Cat extends React.Component {
  render() {
    const { name, img, text, isSelected } = this.props;
    return (
      <div className={"card" + (isSelected ? "selected" : "")}>
        <img className={cat.pic} src={img} alt="cat"></img>
        <div className={cat.name}>{name}</div>
        <div className={cat.text}>
          Центральное понятие в React – компонент. Вся остальная
          функциональность построена вокруг него
        </div>
        <div className={cat.text}>{text}</div>
        <button className={cat.button}>Взять домой</button>
      </div>
    );
  }
}

export default Cat;
