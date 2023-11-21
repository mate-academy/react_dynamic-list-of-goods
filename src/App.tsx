import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [option, setOption] = useState('all');

  useEffect(() => {
    let promise;

    switch (option) {
      case 'all':
        promise = getAll();
        break;
      case 'first5':
        promise = get5First();
        break;
      case 'red':
        promise = getRedGoods();
        break;
      default:
        promise = getAll();
        break;
    }

    promise
      .then(allGoods => setGoods(allGoods));
  }, [option]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setOption('all');
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setOption('first5');
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setOption('red');
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
