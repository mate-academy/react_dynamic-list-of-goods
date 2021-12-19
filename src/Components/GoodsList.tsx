import React from 'react';
import { Good } from '../Types/Good';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="GoodsList">
      {goods.map(({ id, name, color }) => (
        <li
          key={id}
          style={{ color }}
          className="GoodsList__item"
        >
          {name}
        </li>
      ))}
    </ul>
  );
};
