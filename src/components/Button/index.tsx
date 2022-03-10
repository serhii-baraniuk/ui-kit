import React, { ButtonHTMLAttributes, useState } from "react";
import styles from "./index.module.css";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  colorHover: string;
  background: string;
  backgroundHover: string;
  padding: string;
  fontSize: string | number;
  isActive?: boolean;
}

export const Button: React.FC<Props> = ({
  color = "black",
  colorHover = "black",
  background = "#ed3f78",
  backgroundHover = "#cb2e71",
  padding = "12px 24px",
  fontSize = 16,
  isActive = false,
  ...otherProps
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      {...otherProps}
      className={styles.root}
      style={{
        fontSize: fontSize,
        padding: padding,
        color: hovered || isActive ? colorHover : color,
        background: hovered || isActive ? backgroundHover : background,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};
