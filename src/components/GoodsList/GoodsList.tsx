import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './GoodsList.scss';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <div className="Goods">
      <ul className="Goods__list">
        {goods.map(good => (
          <li
            key={good.id}
            className="Goods__item"
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
