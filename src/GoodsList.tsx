import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="goodList">
    {goods.map(good => (
      <li
        className="goodList__item"
        key={good.id}
        data-cy="good"
        style={{ color: good.color, fontSize: 20 }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
