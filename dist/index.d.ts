import React, { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: string;
    colorHover: string;
    background: string;
    backgroundHover: string;
    padding: string;
    fontSize: string | number;
    isActive?: boolean;
}
declare const Button: React.FC<Props>;

declare const Input: React.FC<InputHTMLAttributes<HTMLInputElement>>;

export { Button, Input };
