import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

// eslint-disable-next-line react/display-name
export const GoodsList = React.memo(({ goods }: Props) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} data-cy="good" className={`good good--${good.color}`}>
        {good.name}
      </li>
    ))}
  </ul>
));
