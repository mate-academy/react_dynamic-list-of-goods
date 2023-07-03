import React from 'react';
import 'bulma/css/bulma.min.css';
import classNames from 'classnames';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ul className="my-3 is-size-5">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={classNames({
          blue: good.color === 'blue',
          red: good.color === 'red',
          green: good.color === 'green',
        })}
      >
        {good.name}
      </li>
    ))}
  </ul>
));