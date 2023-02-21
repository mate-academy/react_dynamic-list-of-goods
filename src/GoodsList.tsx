import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
  loading: boolean;
};

export const GoodsList: React.FC<Props> = ({ goods, loading }) => (
  <ul>
    {loading
      ? 'loading...'
      : goods.map((good) => (
        <li key={good.id} data-cy="good" style={{ color: `${good.color}` }}>
          {good.name}
        </li>
      ))}
  </ul>
);
