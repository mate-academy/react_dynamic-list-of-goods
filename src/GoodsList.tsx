// // /* eslint-disable react/display-name */
import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <>
    {goods.length === 0 && <p data-cy="no-goods">No goods available</p>}

    <ul>
      {goods.map(good => (
        <li key={good.id} data-cy="good" style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  </>
);
