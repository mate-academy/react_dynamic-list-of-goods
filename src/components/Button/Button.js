import React from 'react';
import { ButtonShape } from './ButtonShape';
import './Button.scss';

export const Button = ({ text, callback }) => (
  <button
    type="button"
    className="btn btn-outline-dark Button"
    onClick={callback}
  >
    {text}
  </button>
);

Button.propTypes = ButtonShape;
