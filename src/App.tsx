import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = () => {
    getAll()
      .then(data => setGoods(data))
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Failed to load all goods:', error);
      });
  };

  const handleLoad5 = async () => {
    try {
      const data = await get5First();

      setGoods(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to load first 5 goods:', error);
    }
  };

  const handleLoadRed = () => {
    getRedGoods()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Failed to load red goods:', error);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handleLoad5}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
