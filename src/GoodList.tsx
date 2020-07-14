import React from 'react';
import { GoodListItem } from './Interfaces';

export const GoodsList: React.FC<{goods: GoodListItem[]}> = (props) => {
  const { goods } = props;

  return (
    <ul>
      {goods.map(item => (
        <li
          key={item.id}
          style={{ color: `${item.color}` }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
