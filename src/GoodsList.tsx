import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{
          padding: '5px',
          width: '200px',

          color: good.color,
          fontFamily: 'Arial',
          fontWeight: '600',
        }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
