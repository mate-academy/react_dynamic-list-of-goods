import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => {
      const { id, color, name } = good;

      const colorStyle = { color };

      return (
        <li
          key={id}
          data-cy="good"
          style={colorStyle}
        >
          {name}
        </li>
      );
    })}
  </ul>
);
