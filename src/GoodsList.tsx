import React, { memo } from 'react';
import { Good } from './types/Good';
import 'bulma';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = memo(({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={`goods ${good.color}`}
      >
        {good.name}
      </li>
    ))}
  </ul>
));
