import React, { FC } from 'react';
import './GoodList.css';

interface Props {
  goods: Good[];
}

export const GoodsList: FC<Props> = ({ goods }) => {
  return (
    <ul className="list">
      {Object.values(goods).map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
