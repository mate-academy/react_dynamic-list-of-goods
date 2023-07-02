import React from 'react';
import classnames from 'classnames';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={classnames({
          blue: good.color === 'blue',
          red: good.color === 'red',
          green: good.color === 'green',
        })}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
