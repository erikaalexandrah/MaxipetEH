// Button.js
import React from "react";
import styles from "./button.module.css";

const Button = (props) => {
  const title = props.title;
  const Icon = props.icon;

  return (
    <button className={styles["button-basics"]}>
      <div className={styles["button-basics-icon"]}>
        {Icon && <Icon/>}
      </div>
      {title}
    </button>
  );
};

export default Button;
