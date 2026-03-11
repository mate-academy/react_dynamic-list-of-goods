import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, getFirst, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAll = async () => {
    try {
      const data = await getAll();

      setGoods(data);
    } catch (error) {
      setGoods([]);
    }
  };

  const loadFirst = async () => {
    try {
      const data = await getFirst();

      setGoods(data);
    } catch (error) {
      setGoods([]);
    }
  };

  const loadRed = async () => {
    try {
      const data = await getRedGoods();

      setGoods(data);
    } catch (error) {
      setGoods([]);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFirst}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
