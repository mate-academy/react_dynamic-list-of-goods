import React from 'react';
import './GoodsList.scss';

interface Props {
  goods: Good[],
}

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goods-list">
      {goods.map(good => (
        <li
          style={{ color: good.color }}
          key={good.id}
          className="goods-list__item"
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
