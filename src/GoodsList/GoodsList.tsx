import React from 'react';

import './GoodsList.scss';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goods__list">
      {goods.map(good => (
        <li className="list__item" key={good.id} style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};
