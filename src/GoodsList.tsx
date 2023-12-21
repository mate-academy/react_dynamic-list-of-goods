import React from 'react';
import classNames from 'classnames';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => {
      const colorClass = classNames({
        red: good.color === 'red',
        green: good.color === 'green',
        blue: good.color === 'blue',
      });

      return (
        <li
          key={good.id}
          data-cy="good"
          className={colorClass}
        >
          {good.name}
        </li>
      );
    })}
  </ul>
);
