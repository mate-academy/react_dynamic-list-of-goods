import React from 'react';
import { Good } from '../../types/Good';

import './GoodsList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ul className="goods-list">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ color: good.color }}
        className="good"
      >
        {good.name}
      </li>
    ))}
  </ul>
));
