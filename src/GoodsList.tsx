import React from 'react';
import { Good } from './types/Good';
import './GoodList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="GoodList">
    {goods.map(good => (
      <li
        className={`GoodList__item GoodList__item--${good.color}`}
        key={good.id}
        data-cy="good"
      >
        {good.name}
      </li>
    ))}
  </ul>
);
