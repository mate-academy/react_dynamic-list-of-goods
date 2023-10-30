import React from 'react';
import { Good } from './types/Good';
import './App.scss';

type Props = {
  goods: Good[]
};

const colorClass: Record<string, string> = {
  red: 'color-red',
  green: 'color-green',
  blue: 'color-blue',
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={colorClass[good.color]}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
