import React from 'react';
import { GoodInterface } from '../../interfaces';

interface GoodsListInterface {
  goods: GoodInterface[];
}

export const GoodsList: React.FC<GoodsListInterface> = (props) => {
  const { goods } = props;

  return (
    <ul className="list">
      {goods.map(item => (
        <li
          key={item.id}
          style={{ color: item.color }}
          className="list__item"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
