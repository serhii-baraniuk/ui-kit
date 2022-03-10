import React, { InputHTMLAttributes } from "react";
import styles from "./index.module.css";

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (
  props
) => <input {...props} className={styles.root} />;
