import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);

  const loadAllGoods = () => {
    setLoading(true);
    goodsAPI.getAll().then(data => {
      setGoods(data);
      setLoading(false);
    });
  };

  const loadFirstFiveGoods = () => {
    setLoading(true);
    goodsAPI.get5First().then(data => {
      setGoods(data);
      setLoading(false);
    });
  };

  const loadRedGoods = () => {
    setLoading(true);
    goodsAPI.getRedGoods().then(data => {
      setGoods(data);
      setLoading(false);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAllGoods}
        disabled={loading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFirstFiveGoods}
        disabled={loading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRedGoods}
        disabled={loading}
      >
        Load red goods
      </button>

      {loading && <p>Loading...</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
