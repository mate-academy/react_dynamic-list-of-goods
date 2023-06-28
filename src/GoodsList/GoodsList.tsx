import React from 'react';
import { Good } from '../types/Good';
import './GoodsList.scss';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="GoodsList">
    {goods.map((good) => (
      <li
        className={`GoodsList__item GoodsList__item--${good.color}`}
        key={good.id}
        data-cy="good"
      >
        {good.name}
      </li>
    ))}
  </ul>
);
