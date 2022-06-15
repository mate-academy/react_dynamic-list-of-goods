import React from 'react';
import { Good } from '../react-app-env';

interface Props {
  goods: Good[]
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="list-group">
    {goods.map(good => (
      <li
        className="list-group-item"
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
