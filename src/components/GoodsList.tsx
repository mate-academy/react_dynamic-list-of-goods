import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goods">
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
          {' - '}
          {good.color}
        </li>
      ))}
    </ul>
  );
};
