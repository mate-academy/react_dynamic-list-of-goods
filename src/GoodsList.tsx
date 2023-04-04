import React from 'react';
import 'bulma/css/bulma.min.css';

import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="goods">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className="goods__item tag is-medium"
        style={{ color: `${good.color}` }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
