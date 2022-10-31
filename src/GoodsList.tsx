import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => {
      const { id, color, name } = good;

      return (
        <li
          key={id}
          data-cy="good"
          className="box is-italic is-size-3 has-text-left"
          style={{ color }}
        >
          {name}
        </li>
      );
    })}
  </ul>
);
