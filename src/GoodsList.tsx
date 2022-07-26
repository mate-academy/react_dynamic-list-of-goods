import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
      >
        <a
          className="panel-block"
          href="#/"
          style={{ color: good.color }}
        >
          {good.name}
        </a>
      </li>
    ))}
  </ul>
);
