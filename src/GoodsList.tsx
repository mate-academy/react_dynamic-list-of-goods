import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }) => (
    <div className="content">
      <ul className="mt-3">
        {goods.map(good => (
          <li
            className="ml-6"
            key={good.id}
            data-cy="good"
            style={{
              color: good.color,
            }}
          >
            {good.name}
          </li>
        ))}
      </ul>
    </div>
  ),
);
