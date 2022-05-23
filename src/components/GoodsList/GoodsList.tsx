import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="goods__list">
    {goods.map((good) => (
      <li
        className="goods__item"
        style={{ color: `${good.color}` }}
        key={good.id}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
