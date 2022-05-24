import React from 'react';
import './GoodList.scss';

type Props = {
  goods: Good[],
};

export const GoodList: React.FC<Props> = ({ goods }) => (
  <ul className="goods-list">
    {goods.map((good) => (
      <li
        key={good.id}
        className="goods-list__good"
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
