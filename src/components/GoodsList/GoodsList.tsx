import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[];
};

export const Goodslist: React.FC<Props> = ({ goods }) => (
  <ul className="goodsList">
    {goods.map(({ id, name, color }) => (
      <li
        key={id}
        className="goodsList__good"
        style={{ color }}
      >
        {name}
      </li>
    ))}
  </ul>
);
