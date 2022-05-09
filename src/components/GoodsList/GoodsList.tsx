import React from 'react';
import './GoodsList.scss';

type Props = {
  listOfGoods: Good[],
};

export const GoodsList: React.FC<Props> = ({ listOfGoods }) => {
  return (
    <ul className="goodsList">
      {listOfGoods.map(good => (
        <li
          key={good.name}
          style={{
            color: good.color,
          }}
          className="goodsList-item"
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
