import React from 'react';
import classnames from 'classnames';
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
        className={classnames(
          {
            'link-red': good.color === 'red',
            'link-green': good.color === 'green',
            'link-blue': good.color === 'blue',
          },
        )}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
