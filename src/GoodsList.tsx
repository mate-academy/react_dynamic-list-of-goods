import * as React from 'react';
import './App.scss';

import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        className={`good-list__item--${good.color}`}
        data-cy="good"
      >
        {good.name}
      </li>
    ))}
  </ul>
);
