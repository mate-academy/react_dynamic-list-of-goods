import React, { FC } from 'react';

interface Props {
  onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  children: string;
}

export const Button: FC<Props> = ({ onClick, children }) => (
  <button
    type="button"
    className="button"
    onClick={onClick}
  >
    {children}
  </button>
);
