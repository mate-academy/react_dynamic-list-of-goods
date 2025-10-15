import './App.scss';
import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
  errorMessage: string | null;
};

const GoodsListComponent: React.FC<Props> = ({ goods, errorMessage }) => (
  <>
    <ul>
      {goods.map(good => (
        <li key={good.id} data-cy="good" className={good.color}>
          {good.name}
        </li>
      ))}
    </ul>

    <h2 className="error">{errorMessage}</h2>
  </>
);

export const GoodsList = React.memo(GoodsListComponent);
