import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="goodslist">
    {goods.map(({ id, color, name }) => (
      <li
        className="goodslist__item"
        key={id}
        style={{ color: `${color}` }}
      >
        {name}
      </li>
    ))}
  </ul>
);
