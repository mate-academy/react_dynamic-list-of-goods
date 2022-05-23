import React from 'react';

import './GoodsList.scss';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
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
