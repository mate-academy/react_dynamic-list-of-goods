import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <div className="content is-medium">
    <ul className="list">
      {goods.map(good => (
        <li
          className="list-item"
          style={{ color: good.color }}
          key={good.id}
          data-cy="good"
        >
          {good.name}
        </li>
      ))}
    </ul>
  </div>
);
