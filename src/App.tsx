import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/goods-list/GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods, GetGoodsFunction } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const fetchGoods = (callback: GetGoodsFunction) => {
    callback()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
        setErrorMessage('Do not successfully fetch goods');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => fetchGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => fetchGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => fetchGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {isError ? (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      ) : (
        <GoodsList goods={goods} />
      )}
    </div>
  );
};
