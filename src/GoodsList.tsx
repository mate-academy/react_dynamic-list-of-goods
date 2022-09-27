import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => {
        const { id, name, color } = good;

        return (
          <li
            key={id}
            data-cy="good"
            style={{ color }}
            className="box"
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
};
