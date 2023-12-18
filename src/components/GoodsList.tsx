import React from 'react';
import 'bulma';
import { Good } from '../types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className="is-family-secondary"
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
