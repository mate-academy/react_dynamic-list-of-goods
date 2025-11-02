import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

const colors = [
  'green',
  'blue',
  'red',
  'yellow',
  'pink',
  'purple',
  'orange',
] as const;

type Colors = (typeof colors)[number];

function isColor(value: unknown): value is Colors {
  return typeof value === 'string' && colors.includes(value as Colors);
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => {
      const { id, name, color } = good;

      return (
        <li
          key={id}
          data-cy="good"
          style={{ color: isColor(color) ? color : 'black' }}
        >
          {name}
        </li>
      );
    })}
  </ul>
);
