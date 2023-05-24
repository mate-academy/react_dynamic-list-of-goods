import React from 'react';
import { Good } from './types/Good';

type PropsGoodList = {
  goods: Good[]
};

export const GoodsList: React.FC<PropsGoodList> = ({ goods }) => (
  <ul>
    {goods.map(good => {
      const { id, name, color } = good;

      return (
        <li
          key={id}
          data-cy="good"
          style={{ color }}
        >
          {name}
        </li>
      );
    })}
  </ul>
);
