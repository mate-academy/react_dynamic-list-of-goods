import React, { FC } from 'react';
import './GoodsList.css';

interface State {
  goods: Good[];
}

export const GoodsList: FC<State> = ({ goods }) => (
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
