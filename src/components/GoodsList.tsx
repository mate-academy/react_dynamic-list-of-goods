import React from 'react';
import { Good } from '../types/Good';
import 'bulma/css/bulma.min.css';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul
    className="list"
  >
    {goods.map(good => (
      <li
        className="
          list-1
          type-1"
        key={good.id}
        data-cy="good"
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
