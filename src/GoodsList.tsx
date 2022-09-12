import classNames from 'classnames';
import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
  red: boolean
};

export const GoodsList: React.FC<Props> = ({ goods, red }) => (
  <ul className="has-text-centered">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={classNames('has-text-black', {
          'has-text-danger': red,
        })}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
