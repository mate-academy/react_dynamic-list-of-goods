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
        className="GoodList__item"
        key={good.id}
        data-cy="good"
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
