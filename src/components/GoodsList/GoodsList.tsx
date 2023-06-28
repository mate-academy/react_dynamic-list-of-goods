import React, { memo } from 'react';
import './GoodsList.scss';
import { Good } from '../../types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = memo(({ goods }) => (
  <ul className="GoodsList">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={`GoodsList__element GoodsList__element--${good.color}`}
      >
        {good.name}
      </li>
    ))}
  </ul>
));
