import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="App__GoodsList">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className="App__GoodsList__Item"
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
