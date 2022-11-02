import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="is-big mt-3">
    {goods.map(({ id, color, name }) => (
      <li
        key={id}
        data-cy="good"
        className="message-body mb-3"
        style={{ color: color }}
      >
        {name}
      </li>
    ))}
  </ul>
);
