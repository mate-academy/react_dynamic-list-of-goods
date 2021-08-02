import React from 'react';
import { buttonPropTypes } from '../types';

export const Button = ({ onClick, text }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = buttonPropTypes;
