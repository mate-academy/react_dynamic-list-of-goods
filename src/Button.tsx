import React from 'react';

type Props = {
  onClick: () => void;
  children: string;
};

export const Button: React.FC<Props> = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>{children}</button>
);
