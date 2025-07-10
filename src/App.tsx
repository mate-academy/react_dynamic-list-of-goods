import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    switch (filter) {
      case 'all':
        goodsAPI.getAll().then(setGoods);
        break;
      case 'first-five':
        goodsAPI.get5First().then(setGoods);
        break;
      case 'red':
        goodsAPI.getRedGoods().then(setGoods);
        break;
      default:
        break;
    }
  }, [filter]);

  return (
    <div className="App mx-5 my-5">
      <h1 className="title is-1">Dynamic list of Goods</h1>

      <button
        type="button"
        className="button is-info is-normal is-outlined is-rounded"
        data-cy="all-button"
        onClick={() => {
          setFilter('all');
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        className="button is-info is-normal is-outlined is-rounded ml-2"
        data-cy="first-five-button"
        onClick={() => {
          setFilter('first-five');
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        className="button is-info is-normal is-outlined is-rounded ml-2"
        data-cy="red-button"
        onClick={() => {
          setFilter('red');
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
