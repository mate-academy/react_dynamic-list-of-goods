/* eslint-disable react/display-name */
import React from 'react';
import { Good } from './types/Good';
import { FilterType } from './types/FilterType';

type Props = {
  goods: Good[];
  name: string;
};

export const GoodsList: React.FC<Props> = React.memo(({ goods, name }) => {
  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          data-cy="good"
          style={{
            color: name === FilterType.allRed ? 'red' : good.color,
          }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
});
