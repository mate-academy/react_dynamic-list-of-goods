import React from 'react';
import './GoodsList.scss';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="GoodsList">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ color: `${good.color}` }}
        className="GoodsList__good"
      >
        {good.name}
      </li>
    ))}
  </ul>
);
