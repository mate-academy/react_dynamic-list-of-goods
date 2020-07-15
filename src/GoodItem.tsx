import React, { FC } from 'react';

interface Props {
  name: string;
  color: string;
}

export const GoodItem: FC<Props> = props => {
  const { color, name } = props;

  return (
    <li style={{ color }}>{name}</li>
  );
};
