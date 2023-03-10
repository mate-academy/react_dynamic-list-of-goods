import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
  goods5First: Good[],
  goodsRed: Good[]
};

export const GoodsList: React.FC<Props> = ({
  goods,
  goods5First,
  goodsRed,
}) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} data-cy="good">
        {good.name}
        {' '}
        {good.color}
      </li>
    ))}

    {goods5First.map(goodSort => (
      <li key={goodSort.id} data-cy="good">
        {goodSort.name}
        {' '}
        {goodSort.color}
      </li>
    ))}

    {goodsRed.map(goodFilter => (
      <li key={goodFilter.id} data-cy="good">
        {goodFilter.name}
        {' '}
        {goodFilter.color}
      </li>
    ))}
  </ul>
);
