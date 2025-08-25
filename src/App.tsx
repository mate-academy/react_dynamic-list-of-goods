import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);
  const handleAllGoods = async () => {
    try {
      setError(null);
      const res = await getAll();

      setGoods(res);
    } catch (e) {
      setError('Не вдалося завантажити товари. Спробуйте пізніше.');
    }
  };

  const handleFirstFive = async () => {
    try {
      setError(null);
      const res = await get5First();

      setGoods(res);
    } catch (e) {
      setError('Не вдалося завантажити товари. Спробуйте пізніше.');
    }
  };

  const handleRed = async () => {
    try {
      setError(null);
      const res = await getRedGoods();

      setGoods(res);
    } catch (e) {
      setError('Не вдалося завантажити товари. Спробуйте пізніше.');
    }
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

      <button type="button" data-cy="red-button" onClick={handleRed}>
        Load red goods
      </button>

      {error && (
        <div className="error" style={{ color: 'red', marginTop: '10px' }}>
          {error}
        </div>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
