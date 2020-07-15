import React, { FC } from 'react';
import { ButtonProps } from '../interfaces/ButtonProps';

export const Button: FC<ButtonProps> = ({ title, onClick, disabled }) => {
  return (
    <button
      type="button"
      className="btn-large button deep-purple darken-4 waves-effect waves-light"
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
