import React, { useState } from 'react';
import './App.scss';
import { MemoizedGoodsList as GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string>('');

  const handleError = (message: string) => {
    setError(message);
    setGoods([]);
  };

  const handleLoadAll = () => {
    setError('');
    goodsAPI
      .getAll()
      .then(setGoods)
      .catch(() => {
        handleError('Erro ao carregar os produtos');
      });
  };

  const handleLoadFirst5 = () => {
    setError('');
    goodsAPI
      .get5First()
      .then(setGoods)
      .catch(() => {
        handleError('Erro ao carregar os 5 primeiros produtos');
      });
  };

  const handleLoadRed = () => {
    setError('');
    goodsAPI
      .getRedGoods()
      .then(setGoods)
      .catch(() => {
        handleError('Erro ao carregar os produtos vermelhos');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="buttons">
        <button type="button" data-cy="all-button" onClick={handleLoadAll}>
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={handleLoadFirst5}
        >
          Load 5 first goods
        </button>

        <button type="button" data-cy="red-button" onClick={handleLoadRed}>
          Load red goods
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}
      <GoodsList goods={goods} />
    </div>
  );
};
