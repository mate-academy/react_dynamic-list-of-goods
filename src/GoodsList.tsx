import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="goods-list">
    {goods.map(good => {
      const { id, color, name } = good;

      return (
        <li
          className="goods-item"
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
