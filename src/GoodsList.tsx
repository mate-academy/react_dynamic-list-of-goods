import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ color: good.color }} // Use the color for the text or background
      >
        {good.name}
      </li>
    ))}
  </ul>
);
