import React from 'react';
import { Good } from '../type/Good';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="GoodsList">
      {goods.map(({ id, color, name }) => (
        <li key={id} style={{ color: `${color}` }}>
          {name}
        </li>
      ))}
    </ul>
  );
};
