import React, { useState } from 'react';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import './App.scss';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLoad = async (fetcher: () => Promise<Good[]>) => {
    setLoading(true);
    try {
      setGoods(await fetcher());
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {}
      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoad(goodsAPI.getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoad(goodsAPI.get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoad(goodsAPI.getRedGoods)}
      >
        Load red goods
      </button>

      {loading ? <p>Loading...</p> : <GoodsList goods={goods} />}
    </div>
  );
};
