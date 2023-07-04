import React from 'react';
import { Good } from './types/Good';
import classNames from 'classnames';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={classNames({
          blue: good.color === 'blue',
          red: good.color === 'red',
          green: good.color === 'green',
        })}
      >
        {good.name}
      </li>
    ))}
  </ul>
));
