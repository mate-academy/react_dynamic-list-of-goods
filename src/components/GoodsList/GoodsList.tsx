import React from 'react';
import './GoodsList.css';

export const GoodsList: React.FC<Goods> = ({ goods }) => (
  <div className="goods">
    <ul className="goods__list">
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  </div>
);
