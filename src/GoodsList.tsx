import React from 'react';
import { Good } from './types/Good';
import './GoodsList.css';

type Props = {
  goods: Good[];
};

const GoodsListComponent: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ '--item-color': good.color } as React.CSSProperties}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

export const GoodsList = React.memo(GoodsListComponent);
