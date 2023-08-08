import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import {
  getAll,
  get5First,
  getRedGoods,
} from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const loadGoods = useCallback(async () => {
    try {
      const good = await getAll();

      setGoods(good);
    } catch (error) {
      setErrorMessage('Something is wrong');
    }
  }, []);

  const loadGoodsFive = useCallback(async () => {
    try {
      const good = await get5First();

      setGoods(good);
    } catch (error) {
      setErrorMessage('Something is wrong');
    }
  }, []);

  const loadGoodsRed = useCallback(async () => {
    try {
      const good = await getRedGoods();

      setGoods(good);
    } catch (error) {
      setErrorMessage('Something is wrong');
    }
  }, []);

  return (
    <div className="App">
      <h1>{errorMessage || 'Dynamic list of Goods'}</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          loadGoods();
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          loadGoodsFive();
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          loadGoodsRed();
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
