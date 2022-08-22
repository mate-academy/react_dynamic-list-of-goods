import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="list-group list-group-flush">
      {goods.map(good => (
        <li
          key={good.id}
          data-cy="good"
          className="list-group-item"
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
