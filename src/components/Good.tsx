import React, { FC } from 'react';

interface Props {
  color: string;
  name: string;
}

export const Good: FC<Props> = (props) => {
  const { color, name } = props;

  return (
    <li style={{ color }}>{name}</li>
  );
};
