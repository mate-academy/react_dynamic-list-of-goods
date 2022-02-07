import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="list-group">
      {goods.map(good => (
        <li key={good.id} className="list-group-item list-group-item-info">
          <span>{good.name}</span>
        </li>
      ))}
    </ul>
  );
};
