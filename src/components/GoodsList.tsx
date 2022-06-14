import React from 'react';
import { Good } from '../react-app-env';
import './GoodsList.scss';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }) => {
    return (
      <ul className="list">
        {goods.map(good => (
          <li key={good.id} style={{ color: good.color }}>
            {good.name}
          </li>
        ))}
      </ul>
    );
  },
);
