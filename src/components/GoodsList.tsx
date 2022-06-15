import React from 'react';
import './GoodList.scss';

type Props = {
  goods: Good[],
};
export const GoodsList: React.FC<Props> = ({ goods }) => (
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
