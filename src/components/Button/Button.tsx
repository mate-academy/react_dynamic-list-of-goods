import React from 'react';

type ButtonProps = {
  handle(): void;
  name: string;
};

export const Button: React.FC<ButtonProps> = ({ handle, name }) => (
  <button
    className="control__btn"
    type="button"
    onClick={handle}
  >
    {name}
  </button>
);
