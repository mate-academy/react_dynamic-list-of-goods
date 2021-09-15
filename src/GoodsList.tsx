import React from 'react';

import './GoodsList.scss';

interface Props {
  goods: Good[] | null;
}

export const GoodList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="goods__list">
      {goods && (
        goods.map(good => (
          <li
            key={good.id}
            className="goods__item"
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ))
      )}
    </ul>
  );
};
