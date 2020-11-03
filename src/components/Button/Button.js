import React from 'react';
import { ButtonProps } from '../../props/ButtonProps';

export const Button = ({ onClick, text }) => (
  <button
    className="btn btn-primary mx-1"
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = ButtonProps;
