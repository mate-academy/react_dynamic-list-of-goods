import React from 'react';

interface Props {
  handle(): void;
  name: string;
}

export const Button: React.FC<Props> = ({ handle, name }) => (
  <button
    className="control__btn"
    type="button"
    onClick={handle}
  >
    {name}
  </button>
);
