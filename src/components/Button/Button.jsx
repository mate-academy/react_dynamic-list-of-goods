/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Button.scss';

export const Button = ({ text, funcName }) => (
  <button
    className="Button"
    type="button"
    onClick={() => funcName()}
  >
    {text}
  </button>
);
