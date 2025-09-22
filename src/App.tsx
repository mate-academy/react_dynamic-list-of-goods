import React, { useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';
import { Good } from './types/Good';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [messageError, setMessageError] = useState<null | string>(null);

  const loadGoods = async (fetcher: () => Promise<Good[]>) => {
    try {
      const data = await fetcher();

      setGoods(data);
      setMessageError(null);
    } catch (err) {
      setMessageError('Failed to load goods. Please try again.');
      setGoods([]);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(goodsAPI.getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(goodsAPI.get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(goodsAPI.getRedGoods)}
      >
        Load red goods
      </button>

      {messageError && (
        <div style={{ color: 'red', marginTop: '10px' }}>{messageError}</div>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
