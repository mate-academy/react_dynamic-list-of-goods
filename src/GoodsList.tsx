import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <div className="content">
    <ul>
      {goods.map(good => (
        <div>
          <li
            key={good.id}
            data-cy="good"
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        </div>
      ))}
    </ul>
  </div>
));
