import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[]
};

const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="good-list">
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

export default GoodsList;
