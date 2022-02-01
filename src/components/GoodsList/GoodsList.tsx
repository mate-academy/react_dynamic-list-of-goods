import React from 'react';
import './GoodsList.scss';

type Goods = {
  goods: Good[],
};

const GoodsList: React.FC<Goods> = ({ goods }) => (
  <div>
    <ul className="goods__list">
      {goods.map((good) => (
        <li
          className="goods__item"
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  </div>
);

export default GoodsList;
