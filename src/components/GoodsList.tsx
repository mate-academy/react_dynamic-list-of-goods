import React from 'react';
import { Good } from './Interface';

interface Props {
  goods: Good[];
}

const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: `${good.color}`, }}
          className="item"
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

export default GoodsList;
