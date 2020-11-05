import React from 'react';
import { ButtonShape } from '../../Shapes/ButtonShape';
import './Button.scss';

export const Button = ({ data, handleChange }) => (
  <button
    className="button"
    type="button"
    onClick={() => handleChange(data.api)}
  >
    {data.name}
  </button>
);

Button.propTypes = ButtonShape;
