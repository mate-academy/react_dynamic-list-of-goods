import React from 'react';
import { Props } from './types/Good';
import './App.scss';

export const GoodsList: React.FC<Props> = React.memo(function GoodsList({
  goods,
}) {
  return (
    <ul>
      {goods.map(good => (
        <li key={good.id} data-cy="good" style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
});
