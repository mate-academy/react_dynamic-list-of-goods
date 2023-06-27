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
          'has-text-link': good.color === 'blue',
          'has-text-danger': good.color === 'red',
          'has-text-success': good.color === 'green',
        })}
      >
        {good.name}
      </li>
    ))}
  </ul>
));
