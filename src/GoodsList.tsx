import React from 'react';
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
        style={{ color: good.color }}
        className="button is-flex
        is-justify-content-center
         m-1"
      >
        {good.name}
      </li>
    ))}
  </ul>
);
