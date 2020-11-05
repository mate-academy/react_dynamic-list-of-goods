import React from 'react';

export const Button = ({ setGoods, text }) => (
  <button
    className="App__button"
    type="button"
    onClick={setGoods}
  >
    {text}
  </button>
);
