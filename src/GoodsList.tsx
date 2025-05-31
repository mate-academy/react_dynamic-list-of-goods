import React from 'react';
import { Good } from './types/Good';
import classNames from 'classnames';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={classNames({
          red: good.color === 'red',
          blue: good.color === 'blue',
          green: good.color === 'green',
        })}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
