import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="list-group col-4 container">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ color: good.color }}
        className="list-group-item text-center"
      >
        {good.name}
      </li>
    ))}
  </ul>
);
