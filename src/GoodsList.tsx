import React from 'react';
import { Good } from './types/Good';
import 'bootstrap/scss/bootstrap.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="
    list-group
    list-group-flush justify-content-center align-center"
  >
    {goods.map(good => (
      <li
        className="
          list-group-item
          text-center
          list-group-item-action
          text-uppercase"
        key={good.id}
        data-cy="good"
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
