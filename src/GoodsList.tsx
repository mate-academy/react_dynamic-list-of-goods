import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

/* eslint-disable react/display-name */
export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} className={good.color} data-cy="good">
        {good.name}
      </li>
    ))}
  </ul>
));
