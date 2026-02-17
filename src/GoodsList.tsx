import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

// eslint-disable-next-line react/display-name
export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ul>
    {goods.map(good => (
      <li style={{ color: good.color || 'black' }} key={good.id} data-cy="good">
        {good.name}
      </li>
    ))}
  </ul>
));
