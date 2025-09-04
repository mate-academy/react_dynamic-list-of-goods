import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList = React.memo(function GoodsList({ goods }: Props) {
  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          data-cy="good"
          style={{  color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
});
