import React from 'react';
import './GoodsList.scss';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ul className="GoodsList">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className="GoodsList__item"
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
));
