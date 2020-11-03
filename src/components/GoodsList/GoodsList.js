import React from 'react';
import { GoodsListShape } from './GoodsListShape';

export const GoodsList = ({ goods }) => (
  <ul className="list-group">
    {
      goods.map(
        item => (
          <li
            key={item.id}
            style={{ color: item.color }}
            className="list-group-item App__list"
          >
            {item.name}
          </li>
        ),
      )}
  </ul>
);

GoodsList.propTypes = GoodsListShape;
