import React from 'react';
import './GoodList.scss';

interface Props {
  goods: Good[],
}

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goodList">
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
