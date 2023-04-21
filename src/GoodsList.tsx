import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="box">
    {goods.map(good => (
      <li
        key={good.id}
        className="box is-rounded py-2 my-1 has-background-success-light"
        data-cy="good"
        style={{ color: `${good.color}` }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
