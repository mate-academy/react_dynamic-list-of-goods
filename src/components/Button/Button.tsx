import React, { FC } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: string;
}

export const Button: FC<ButtonProps> = ({ onClick, children }) => (
  <button
    type="button"
    className="button"
    onClick={onClick}
  >
    {children}
  </button>
);
