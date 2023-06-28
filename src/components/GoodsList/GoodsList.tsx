import React, { memo } from 'react';
import './GoodsList.scss';
import classNames from 'classnames';
import { Good } from '../../types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = memo(({ goods }) => (
  <ul className="GoodsList">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={classNames('GoodsList__element', {
          [`GoodsList__element--${good.color}`]: true,
        })}
      >
        {good.name}
      </li>
    ))}
  </ul>
));
