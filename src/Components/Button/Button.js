import React from 'react';
import { ButtonShape } from '../../Shapes/ButtonShape';
import './Button.scss';

export const Button = ({
  text,
  data,
  handleChange,
}) => (
  <button
    className="button"
    type="button"
    onClick={() => handleChange(data)}
  >
    {text}
  </button>
);

Button.propTypes = ButtonShape;
