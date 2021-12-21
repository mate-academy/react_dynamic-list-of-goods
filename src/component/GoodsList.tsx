import React from 'react';
import { Good } from '../type/Good';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="GoodsList">
      {goods.map(item => (
        <li key={item.id} style={{ color: `${item.color}` }}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
