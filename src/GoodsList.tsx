import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

// eslint-disable-next-line react/display-name
export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }: { goods: Good[] }) => (
    <ul>
      {goods.map(good => (
        <li key={good.id} data-cy="good" style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  ),
);
