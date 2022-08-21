import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return goods.length === 0
    ? (
      <div className="title is-5">
        Click the button above to show the result
      </div>
    )
    : (
      <ul>
        {goods.map(good => (
          <li
            key={good.id}
            data-cy="good"
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ))}
      </ul>
    );
};
