import React from 'react';

import { Good } from '../react-app-env';

export const GoodsList: React.FC<{ goods: Good[] }> = ({ goods }) => {
  return (
    <ul>
      {goods.map((good) => (
        <li key={good.id} style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};
