import React from 'react';
import './GoodList.scss';

type Props = {
  goods: Good[];
};

export const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="list">
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
          className="list__item"
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
