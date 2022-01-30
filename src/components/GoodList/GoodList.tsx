import React from 'react';

import './GoodList.scss';

type Props = {
  goods: Good[],
};

export const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="good-list">
      {goods.map(good => (
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
