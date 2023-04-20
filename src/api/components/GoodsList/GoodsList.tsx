import React from 'react';
import { Good } from '../../../types/Good';
import './GoodsList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }) => {
    return goods.length > 0 ? (
      <ul className="GoodsList">
        {goods.map(({ id, name, color }) => {
          return (
            <li
              key={id}
              data-cy="good"
              className="GoodsList__item"
              style={{ color }}
            >
              {name}
            </li>
          );
        })}
      </ul>
    ) : (
      <p>Filter does not selected</p>
    );
  },
);
