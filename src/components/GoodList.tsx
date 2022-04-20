import React from 'react';
import './GoodList.scss';

type Props = {
  goods: Good[]
};

export const GoodList: React.FC<Props> = React.memo(
  ({ goods }) => (
    <ul className="list">
      {goods.map(good => (
        <li
          key={good.id}
          className="list__item"
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  ),
);
