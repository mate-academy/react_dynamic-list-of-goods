import React from 'react';
import { Good } from './types/Good';
import classNames from 'classnames';

type Props = {
  goods: Good[];
};

const textColorHandler = (value: string) => {
  switch (value) {
    case 'red':
      return 'red-text';
    case 'green':
      return 'green-text';
    case 'blue':
      return 'blue-text';
    default:
      return '';
  }
};

const GoodsListComponent: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={classNames(textColorHandler(good.color))}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

export const GoodsList = React.memo(GoodsListComponent);
