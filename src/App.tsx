import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [useGoods, setUseGoods] = useState('');

  useEffect(() => {
    switch (useGoods) {
      case 'All':
        getAll().then(allGoods => {
          setGoods(allGoods);
        });
        break;
      case 'FirstFive':
        get5First().then(allGoods => {
          setGoods(allGoods);
        });
        break;
      case 'Red':
        getRedGoods().then(allGoods => {
          setGoods(allGoods);
        });
        break;
      default:
        break;
    }
  }, [useGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setUseGoods('All')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setUseGoods('FirstFive')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setUseGoods('Red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
