import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[] | null;
  dataError: boolean;
};

export const GoodsList: React.FC<Props> = React.memo(
  ({ goods, dataError }) => (
    <>
      {dataError && <p className="error has-text-danger">Goods not foun</p>}
      {goods && (
        <ul className="goods">
          {goods.map(good => (
            <li
              key={good.id}
              data-cy="good"
              style={{ color: good.color }}
              className="good"
            >
              {good.name}
            </li>
          ))}
        </ul>
      )}
    </>
  ),
);
