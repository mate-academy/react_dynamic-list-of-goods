import React from 'react';
import { Gods } from './interface';

const List: React.FunctionComponent<Gods> = ({ godsList }) => (
  <ul>
    {godsList.map(list => (
      <li key={list.id} style={{ color: `${list.color}` }}>
        {list.name}
      </li>
    ))}
  </ul>
);

export default List;
