import React, { FC } from 'react';

interface ButtonProps {
  onClick(): void;
  title: string;
  isDisabled: boolean;
}

export const Button: FC<ButtonProps> = ({ onClick, title, isDisabled }) => (
  <button
    className="btn button"
    type="button"
    onClick={onClick}
    disabled={isDisabled}
  >
    {title}
  </button>
);
