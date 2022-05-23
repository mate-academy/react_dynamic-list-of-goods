import React from 'react';
import './GoodList.scss';

type Props = {
  goods: Good[];
};

export const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goodsList">
      {goods.map(good => (
        <li
          className="goodsList__item"
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
