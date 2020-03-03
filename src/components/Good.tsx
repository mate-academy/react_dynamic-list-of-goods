import React, { FC } from 'react';

interface Props {
  key: number;
  good: Good;
}

export const Good: FC<Props> = (props) => {
  const { color, name } = props.good;

  return (
    <li style={{ color }}>{name}</li>
  );
};
