import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string>('');

  const handleRequest = (request: Promise<Good[]>) => {
    setError('');

    request.then(setGoods).catch(() => {
      setError('Something went wrong');
      setGoods([]);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleRequest(goodsAPI.getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleRequest(goodsAPI.get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleRequest(goodsAPI.getRedGoods())}
      >
        Load red goods
      </button>

      {error && (
        <p data-cy="error-message" className="error">
          {error}
        </p>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
