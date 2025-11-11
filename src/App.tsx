import React, { useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const handleRequest = async (request: () => Promise<Good[]>) => {
    try {
      setError('');
      const data = await request();

      setGoods(data);
    } catch (e) {
      setError('Failed to load goods. Please try again.');
      setGoods([]);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleRequest(goodsAPI.getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleRequest(goodsAPI.get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleRequest(goodsAPI.getRedGoods)}
      >
        Load red goods
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
