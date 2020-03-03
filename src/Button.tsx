import React, { FC } from 'react';

interface Props {
  onClick: () => void;
  children: string;
}

export const Button: FC<Props> = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>{children}</button>
);
