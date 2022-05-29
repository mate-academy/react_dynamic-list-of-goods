import React from 'react';
import './GoodList.css';

type Props = {
  goods: Good[]
};

export const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goodsList">
      {goods.map((good) => (
        <li
          className="goodList__item"
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
