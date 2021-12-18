import React from 'react';

import './GoodsList.scss';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="Goods__list">
    {goods.map(good => (
      <li
        className="Goods__item"
        key={good.id}
        style={{ backgroundColor: good.color }}
      >
        {`${good.id}: ${good.name}`}
      </li>
    ))}
  </ul>
);
