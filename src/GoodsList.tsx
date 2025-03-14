import * as React from 'react';
import './App.scss';

import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

// eslint-disable-next-line react/display-name
export const GoodsList: React.FC<Props> = React.memo(({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          className={`good-list__item--${good.color}`}
          data-cy="good"
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
});
