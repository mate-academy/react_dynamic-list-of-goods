import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const handleAllGoods = async () => {
    try {
      const goods = await getAll();

      setGoods(goods);
      setError('');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleFirstFive = () => {
    get5First().then(goods => setGoods(goods));
  };

  const handleRedGoods = () => {
    getRedGoods().then(goods => setGoods(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      {!error && <GoodsList goods={goods} />}
      {error && <div className='error'>{error}</div>}
    </div>
  );
};
