import React from 'react';
import './GoodsList.css';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goods">
      {goods.map(good => {
        const { id, name, color } = good;

        return (
          <li
            className="goods__item"
            key={id}
            style={{ color }}
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
};
