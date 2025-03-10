import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

type LoadGoods = 'all' | 'five' | 'red';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | []>([]);
  const [visible, setVisible] = useState(false);
  const [load, setLoad] = useState<LoadGoods | null>(null);

  useEffect(() => {
    if (load === 'all') {
      goodsAPI.getAll().then(setGoods);
    }

    if (load === 'five') {
      goodsAPI.get5First().then(setGoods);
    }

    if (load === 'red') {
      goodsAPI.getRedGoods().then(setGoods);
    }
  }, [load]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setVisible(true);
          setLoad('all');
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setVisible(true);
          setLoad('five');
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setVisible(true);
          setLoad('red');
        }}
      >
        Load red goods
      </button>

      {visible && <GoodsList goods={goods} />}
    </div>
  );
};
