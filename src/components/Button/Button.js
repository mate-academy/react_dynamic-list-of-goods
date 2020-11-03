import React from 'react';
import { ButtonProps } from '../../props/ButtonProps';

export const Button = ({
  loadGoods,
  fetch,
  text,
}) => (
  <button
    className="btn btn-primary mx-1"
    type="button"
    onClick={() => loadGoods(fetch)}
  >
    {text}
  </button>
);

Button.propTypes = ButtonProps;
