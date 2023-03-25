import React from 'react';
import { Good } from './types/Good';

import './GoodsList.scss';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }) => (
    <>
      {goods.length > 0 ? (
        <ul className="goods-list">
          {goods.map(good => {
            const { id, name, color } = good;
            const styles = {
              color,
              borderColor: color,
            };

            return (
              <li
                className="goods-list__item"
                key={id}
                data-cy="good"
                style={styles}
              >
                {name}
              </li>
            );
          })}
        </ul>
      )
        : (
          <p>
            No goods yet
          </p>
        )}
    </>
  ),
);
