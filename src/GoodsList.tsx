import React, { memo } from 'react';
import { Good } from './types/Good';
import './GoodsList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = memo(({ goods }) => (
  <div className="list">
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          data-cy="good"
          className="list--item"
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  </div>
));
