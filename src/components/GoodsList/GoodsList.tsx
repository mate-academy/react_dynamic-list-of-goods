import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="goodsList">
    {goods.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
        className="goodsList_good"
      >
        {good.name}
      </li>
    ))}
  </ul>
);
