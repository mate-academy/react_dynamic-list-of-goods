import React, { memo } from 'react';
import './GoodsList.scss';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = memo(({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={good.color}
      >
        {good.name}
      </li>
    ))}
  </ul>
));
