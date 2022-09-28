import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => {
      const { id, color } = good;

      return (
        <li
          key={id}
          data-cy="good"
          style={{ color }}
        >
          {good.name}
        </li>
      );
    })}
  </ul>
);
