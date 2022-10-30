import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="is-big mt-3">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className="message-body mb-3"
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
