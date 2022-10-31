import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

const getColor = (goodColor: string) => {
  return ({ color: `${goodColor}` });
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={getColor(good.color)}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
