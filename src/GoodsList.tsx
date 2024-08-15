import React from 'react';
import { Good } from './types/Good';
import './App.scss';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} className={good.color} data-cy="good">
        {good.name}
      </li>
    ))}
  </ul>
);
