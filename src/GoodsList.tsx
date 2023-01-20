import React, { memo } from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = memo(({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className="box"
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
));
