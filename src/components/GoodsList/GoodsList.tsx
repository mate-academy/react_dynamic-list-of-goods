import React from 'react';
import { GoodList } from '../../interfaces';

export const GoodsList: React.FC<GoodList> = (props) => {
  const { goods } = props;

  return (
    <ul className="list">
      {goods.map(item => (
        <li
          key={item.id}
          style={{ color: item.color }}
          className="list__item"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
