import React from 'react';
import { Good } from '../react-app-env';

interface Props {
  goods: Good[],
}

export const GoodList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        className="subtitle is-5"
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
