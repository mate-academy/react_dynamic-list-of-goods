import React from 'react';
import classNames from 'classnames';

import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(({ id, color, name }) => (
        <li
          key={id}
          data-cy="good"
          className={classNames(
            { red: color === 'red' },
            { green: color === 'green' },
            { blue: color === 'blue' },
          )}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};
