import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[],
  hasError: boolean,
};

export const GoodsList: React.FC<Props> = ({ goods, hasError }) => (
  <>
    { hasError
      ? (<p>Error, server is unavailable</p>)
      : (
        <ul>
          {goods.map(({ name, id, color }) => (
            <li
              key={id}
              data-cy="good"
              style={{ color }}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
  </>
);
