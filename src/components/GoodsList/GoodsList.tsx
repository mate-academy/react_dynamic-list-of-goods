import React from 'react';
import classNames from 'classnames';
import { Good } from '../../types/Good';
import './GoodsList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="GoodsList">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={classNames(
          'is-family-secondary',
          'GoodsList__item',
          `GoodsList__item--${good.color}`,
        )}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
