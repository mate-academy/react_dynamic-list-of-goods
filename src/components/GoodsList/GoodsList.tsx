import React from 'react';

import './GoodsList.scss';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goods__list goods-list">
      {goods.length > 0 && (
        goods.map(good => (
          <li
            className="goods-list__item"
            key={good.id}
            style={{ background: `linear-gradient(to left, #fff 0%, ${good.color} 100%)` }}
          >
            {good.name}
          </li>
        ))
      )}
    </ul>
  );
};
