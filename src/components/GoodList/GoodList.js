import React from 'react';
import { GoodListProps } from '../../props/GoodListProps';
import { Good } from '../Good';

export const GoodList = ({ goods }) => (
  <ul className="list-group list-group-flush">
    {goods.map(({ id, name, color }) => (
      <li key={id} className="list-group-item">
        <Good good={name} color={color} />
      </li>
    ))}
  </ul>
);

GoodList.propTypes = GoodListProps;
