import React from 'react';
import { Good } from './types/Good';
import './App.scss';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ul>
    {goods.map(good => {
      return (
        <li
          style={{
            color: good.color,
          }}
          key={good.id}
          data-cy="good"
        >
          {good.name}
        </li>
      );
    })}
  </ul>
));
