import React from 'react';
import { Good } from './types/Good';

interface Props {
  goods: Good[];
}

// We pass a named function `function GoodsList(...)` to React.memo
export const GoodsList: React.FC<Props> = React.memo(
  function GoodsList({ goods }) {
    return (
      <ul>
        {goods.map(good => (
          <li key={good.id} data-cy="good" className={`good-item ${good.color}`}>
            {good.name}
          </li>
        ))}
      </ul>
    );
  }
);
