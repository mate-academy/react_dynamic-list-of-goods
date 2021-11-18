import React from 'react';

import './GoodsList.scss';

interface Props {
  goods: Good[],
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="GoodsList">
    {goods.map(good => (
      <li
        style={{ color: good.color }}
        key={good.id}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
