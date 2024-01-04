import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => {
  window.console.log('render list');

  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          data-cy="good"
          className={good.color}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
});
