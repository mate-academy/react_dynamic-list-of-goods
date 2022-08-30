import React from 'react';
import { Good } from './types/Good';
import 'bulma';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goodsList">
      {goods.map(good => (
        <li
          key={good.id}
          data-cy="good"
          className={`goodsList__item color-${good.color}`}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
