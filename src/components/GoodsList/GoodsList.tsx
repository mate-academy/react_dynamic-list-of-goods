import React from 'react';
import { Good } from '../../types/Good';
import './GoodsList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }) => (
    <ul className="cards-box">
      {goods.map(({ name, id, color }) => (
        <li
          className="card"
          key={id}
          data-cy="good"
          style={{ color }}
        >
          <div className="card__name">
            {name}
          </div>
        </li>
      ))}
    </ul>
  ),
);
