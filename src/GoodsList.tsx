import React, { memo } from 'react';
import { Good } from './types/Good';
import './styles/GoodsList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = memo(({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className="list__item"
        style={{ color: `${good.color}` }}
      >
        {good.name}
      </li>
    ))}
  </ul>
));
