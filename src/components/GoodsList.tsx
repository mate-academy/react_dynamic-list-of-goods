import React from 'react';
import './GoodsList.scss';

type Props = {
  goodsFromServer: Good[];
};

export const GoodsList: React.FC<Props> = ({ goodsFromServer }) => {
  return (
    <ul className="goods-list">
      {goodsFromServer.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
          className="goods-list__item"
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
