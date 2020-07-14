import React from 'react';
import { GoodsListItem } from './interfaces';

interface GoodsListProps {
  goods: GoodsListItem[];
}

export const GoodsList: React.FC<GoodsListProps> = ({ goods }) => (
  <ul className="App__list">
    {goods.map(good => (
      <div className="App__good">
        <li key={good.id} style={{ color: good.color }}>{good.name}</li>
        <li className="App__data" key={good.createdAt}>{good.createdAt}</li>
      </div>
    ))}
  </ul>
);
