import React from 'react';
import './GoodsList.css';

type Props = {
  goods: Goods[];
};

const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          className="list__item"
          style={{ color: `${good.color}` }}
        >
          <span>{good.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default GoodsList;
