import React from 'react';
import { Good } from './types/Good';
import './App.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="ml-6 mt-6">
    {goods.map(({ id, name, color }) => (
      <li
        className="item mt-3 pl-4"
        key={id}
        data-cy="good"
        style={{ color }}
      >
        {name}
      </li>
    ))}
  </ul>
);
