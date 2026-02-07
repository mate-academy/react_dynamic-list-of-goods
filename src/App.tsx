import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [myGoods, setMyGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getAll()
            .then(array => {
              setMyGoods(array);
            })
            .catch(error =>
              // eslint-disable-next-line no-console
              console.error('Erro ao carregar todos os goods:', error),
            );
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          get5First()
            .then(array => {
              setMyGoods(array);
            })
            .catch(error =>
              // eslint-disable-next-line no-console
              console.error('Erro ao carregar 5 primeiros goods:', error),
            );
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getRed()
            .then(array => {
              setMyGoods(array);
            })
            // eslint-disable-next-line no-console
            .catch(error => console.error('Erro ao carregar reds:', error));
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={myGoods} />
    </div>
  );
};
