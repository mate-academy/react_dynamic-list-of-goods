import React from 'react';
import { ButtonShape } from '../Shapes/ButtonShape';

export const Button = ({ name, callback }) => (
  <button
    className="App__button"
    type="button"
    onClick={callback}
  >
    {name}
  </button>
);

Button.propTypes = ButtonShape;
