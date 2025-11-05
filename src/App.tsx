import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [list, setList] = useState<Good[]>([]);
  const [errorMessage, setErrorMesage] = useState<string | null>(null);

  const handleLoad = (downloader: () => Promise<Good[]>) => {
    downloader()
      .then(setList)
      .catch(() => setErrorMesage('Failed to load list. Try again later'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => handleLoad(getAll)}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => handleLoad(get5First)}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => handleLoad(getRedGoods)}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      {errorMessage && <p> {errorMessage} </p>}

      <GoodsList goods={list} />
    </div>
  );
};
