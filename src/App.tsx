/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleBtnClick = (clb: () => Promise<Good[]>) => {
    setLoading(true);
    setErrorMessage('');

    setTimeout(() => {
      clb()
        .then(data => setGoods(data))
        .catch(() => {
          setErrorMessage('Something went wrong');
          setGoods([]);
        })
        .finally(() => setLoading(false));
    }, 1000);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleBtnClick(goodsAPI.getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleBtnClick(goodsAPI.get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleBtnClick(goodsAPI.getRedGoods)}
      >
        Load red goods
      </button>

      {loading && <p>Loading...</p>}

      {!loading
        && !errorMessage
        && goods.length > 0
        && <GoodsList goods={goods} />}

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
