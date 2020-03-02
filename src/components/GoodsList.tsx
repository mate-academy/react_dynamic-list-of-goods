import React from 'react';
import { Good } from './Good';

import './GoodsList.css';

export const GoodsList: React.FC<Prop> = ({ list }) => {
  return (
    <ul>
      {list.map(good => (
        <Good key={good.id} good={good} />
      ))}
    </ul>
  );
};
