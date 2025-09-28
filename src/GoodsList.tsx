/* eslint-disable react/display-name */
import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

// Memoizado para evitar re-renders desnecessários
export const GoodsList = React.memo(({ goods }: Props) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ color: (good.color ?? 'inherit').toString() }}
      >
        {good.name ?? 'Unknown'}
      </li>
    ))}
  </ul>
));
