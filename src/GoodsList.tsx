import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
  hasRequestError: boolean
};

export const GoodsList: React.FC<Props> = React.memo((
  {
    goods,
    hasRequestError,
  },
) => (
  <>
    { hasRequestError
      ? (
        <h3>
          An error occurred while downloading data from the server
        </h3>
      )
      : (
        <ul>
          {goods.map(good => (
            <li
              key={good.id}
              data-cy="good"
              style={{ color: good.color }}
            >
              {good.name}
            </li>
          ))}
        </ul>
      )}
  </>
));
