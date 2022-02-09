import React from "react";
import styles from "./index.module.css";

interface ButtonProps {
  text?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <button {...props} className={styles.root} />;
};
