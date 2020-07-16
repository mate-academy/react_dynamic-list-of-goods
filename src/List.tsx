import React from 'react';
import { Goods } from './interface';

const List: React.FunctionComponent<Goods> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} style={{ color: `${good.color}` }}>
        {good.name}
      </li>
    ))}
  </ul>
);

export default List;
