import React, { FC } from 'react';
import { Good } from '../types';

type Props = Pick<Good, 'name' | 'color'>;

export const GoodItem: FC<Props> = (props) => {
  const {
    name,
    color,
  } = props;

  return (
    <li style={{ color }}>
      {name}
    </li>
  );
};
