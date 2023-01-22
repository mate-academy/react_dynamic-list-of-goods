import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => {
      const { id, color, name } = good;

      return (
        <li
          key={id}
          style={{ color }}
          data-cy="good"
        >
          {name}
        </li>
      );
    })}
  </ul>
);
