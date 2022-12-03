import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const initialGoods = [] as Good[];
  const [goods, setGoods] = useState(initialGoods);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getAll()
            .then(item => setGoods(item));
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          get5First()
            .then(item => setGoods(item));
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getRedGoods()
            .then((item) => setGoods(item));
        }}
      >
        Load red goods
      </button>

      {goods.length && (<GoodsList goods={goods} />)}
    </div>
  );
};
