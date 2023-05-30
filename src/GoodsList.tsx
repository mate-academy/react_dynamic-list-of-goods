import React from 'react';
import { Good } from './types/Good';

type GoodsListProps = {
  goods: Good[]
  errorMessage: string
};

export const GoodsList: React.FC<GoodsListProps> = (
  { goods, errorMessage },
) => (
  <ul>
    {errorMessage
      ? <li>{errorMessage}</li>
      : goods.map(good => {
        const { id, color, name } = good;

        return (
          <li
            key={id}
            data-cy="good"
            style={{ color }}
          >
            {name}
          </li>
        );
      })}
  </ul>
);
