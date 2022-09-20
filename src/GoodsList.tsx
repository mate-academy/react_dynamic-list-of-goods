import React from 'react';
import classNames from 'classnames';
import { Good } from './types/Good';

type Props = {
  goods: Good[],
  colored: boolean,
};

export const GoodsList: React.FC<Props> = ({ goods, colored }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={classNames('', {
          red: colored,
        })}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
