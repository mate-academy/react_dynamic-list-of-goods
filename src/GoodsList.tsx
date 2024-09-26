import React from 'react';
import { Good } from './types/Good';
// import './App.scss';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map((good: Good) => (
      <li key={good.id} data-cy="good" style={{ color: `${good.color}` }}>
        {good.name}
      </li>
    ))}
  </ul>
);
