import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="goods-list">
    {goods.map(good => (
      <li
        className="goods-list__item"
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
