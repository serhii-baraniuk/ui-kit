import React, { ButtonHTMLAttributes } from "react";
export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: string;
    colorHover: string;
    background: string;
    backgroundHover: string;
    padding: string;
    fontSize: string | number;
    isActive?: boolean;
}
export declare const Button: React.FC<Props>;
