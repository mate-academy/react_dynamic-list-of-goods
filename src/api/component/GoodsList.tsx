import React from 'react';
import { Good } from '../type/Good';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
