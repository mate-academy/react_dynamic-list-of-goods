import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="goodList">
    {goods.map(({ id, color, name }) => (
      <li
        className="goodList__item"
        key={id}
        style={{ color }}
      >
        {name}
      </li>
    ))}
  </ul>
);
