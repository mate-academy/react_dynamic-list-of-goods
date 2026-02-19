import React from 'react';
import { Good } from './types/Good';
import classNames from 'classnames';

type Props = {
  goods: Good[];
};

const GoodsListComponent: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={classNames({
          'good-red': good.color === 'red',
          'good-green': good.color === 'green',
          'good-blue': good.color === 'blue',
        })}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

GoodsListComponent.displayName = 'GoodsList';

export const GoodsList = React.memo(GoodsListComponent);
