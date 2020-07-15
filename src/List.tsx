import React from 'react';
import { Gods } from './interface';

const List: React.FunctionComponent<Gods> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} style={{ color: `${good.color}` }}>
        {good.name}
      </li>
    ))}
  </ul>
);

export default List;
