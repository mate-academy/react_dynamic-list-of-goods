import React from 'react';
import './GoodList.scss';

type Props = {
  goods: Good[];
};

export const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goodsList">
      {goods.map(({ id, color, name }) => (
        <li
          className="goodsList__item"
          key={id}
          style={{ color }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};
