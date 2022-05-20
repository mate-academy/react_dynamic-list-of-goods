import React from 'react';

import './GoodsList.scss';

type Props = {
  goods: Array<Good>;
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
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
