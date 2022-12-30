import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="
      is-flex
      is-flex-direction-column
      is-align-items-center
    "
  >
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ color: good.color }}
        className="is-size-4"
      >
        {good.name}
      </li>
    ))}
  </ul>
);
