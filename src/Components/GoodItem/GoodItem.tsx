import React, { FC } from 'react';

type Props = {
  name: string;
  color: string;
};
export const GoodItem: FC<Props> = ({ name, color }) => {
  return (
    <li style={{ color }}>{name}</li>
  );
};
