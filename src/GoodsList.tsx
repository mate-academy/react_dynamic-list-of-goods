import React from 'react';
import classNames from 'classnames';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={classNames({ red: good.color === 'red' })}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
