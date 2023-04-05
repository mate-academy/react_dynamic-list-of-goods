import React from 'react';
import classNames from 'classnames';
import { Good } from '../../../types/Good';
import './GoodsList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }) => (

    <ul className={classNames({ GoodsList: goods.length > 0 })}>
      {goods.map((good) => {
        const { id, name, color } = good;

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
  ),
);
