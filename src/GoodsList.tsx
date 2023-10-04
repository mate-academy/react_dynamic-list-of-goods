import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => {
      const liStyle = {
        color: good.color,
      };

      return (
        <li
          key={good.id}
          data-cy="good"
          style={liStyle}
        >
          {good.name}
        </li>
      );
    })}
  </ul>
);
