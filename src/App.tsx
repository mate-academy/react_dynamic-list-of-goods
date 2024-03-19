import React, { useState } from 'react';
import * as goodsAPI from './api/goods';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import './App.scss';

export const App: React.FC = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [goods, setGoods] = useState<Good[]>([]);

  const fetchGoods = (getServerGoods: () => Promise<Good[]>) => () => {
    setGoods([]);
    setError('');
    setLoading(true);

    getServerGoods()
      .then(setGoods)
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={fetchGoods(goodsAPI.getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={fetchGoods(goodsAPI.get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={fetchGoods(goodsAPI.getRedGoods)}
      >
        Load red goods
      </button>

      {!error && !loading && <GoodsList goods={goods} />}
    </div>
  );
};
