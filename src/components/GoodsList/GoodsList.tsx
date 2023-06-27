import React from 'react';
import { Good } from '../../types/Good';
import './GoodsList.scss';

interface GoodsListProps {
  goods: Good[];
}

export const GoodsList: React.FC<GoodsListProps> = ({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={`list-item is-${good.color}`}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
