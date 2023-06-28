import React from 'react';
import { Good } from '../types/Good';
import './GoodsList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={`good-color--${good.color}`}
      >
        {good.name}
      </li>
    ))}
  </ul>
));
