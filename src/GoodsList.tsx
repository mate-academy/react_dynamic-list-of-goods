import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => {
      const {
        id,
        name,
        color,
      } = good;

      return (
        <li
          className="is-size-5"
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
