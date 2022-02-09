import React from 'react';

interface ButtonProps {
    text?: string;
}
declare const Button: React.FC<ButtonProps>;

interface InputProps {
    text?: string;
}

declare const Input: React.FC<InputProps>;

interface HelenHelenProps {
    helenhelen?: string;
}

declare const HelenHelen: React.FC<HelenHelenProps>;

declare const VeryBigComponent: React.FC;

export { Button, HelenHelen, Input, VeryBigComponent };
