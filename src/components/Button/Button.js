import React from 'react';
import { ButtonShape } from './ButtonShape';

export const Button = ({ text, callback }) => (
  <button
    type="button"
    className="btn btn-outline-dark"
    style={{ margin: 5 }}
    onClick={callback}
  >
    {text}
  </button>
);

Button.propTypes = ButtonShape;
