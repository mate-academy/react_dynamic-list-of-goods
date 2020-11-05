import React from 'react';
import { GoodsListShape } from '../Shapes/GoodsListShape';

export const GoodsList = ({ goods }) => (
  <ul className="App__list">
    {
      goods.map(good => (
        <li
          className="App__item"
          key={good.id}
          style={{ color: `${good.color}` }}
        >
          {good.name}
        </li>
      ))
    }
  </ul>
);

GoodsList.propTypes = GoodsListShape;
