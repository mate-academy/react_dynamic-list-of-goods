import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(({name, id, color}) => (
      <li
      key={id}
      data-cy='good'
      style={{ color }}
      className='title is-5'
      >
        {name}
      </li>
    ))}
  </ul>
);
