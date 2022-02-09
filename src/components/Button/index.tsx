import React, { ButtonHTMLAttributes } from "react";
import styles from "./index.module.css";

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => <button {...props} className={styles.root}></button>;
