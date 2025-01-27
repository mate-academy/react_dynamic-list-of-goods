import React, { useState, useEffect } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [activeMode, setActiveMode] = useState('');

  const hanleAll = () => {
    getAll().then(data => setGoods(data));
    setActiveMode('all');
  };

  const hanle5 = () => {
    get5First().then(data => setGoods(data));
    setActiveMode('5');
  };

  const hanleRed = () => {
    getRedGoods().then(data => setGoods(data));
    setActiveMode('red');
  };

  useEffect(() => {
    fetch('/goods.json')
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Failed to fetch goods');
      })
      .then((data: Good[]) => setGoods(data));
  }, [activeMode]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={hanleAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={hanle5}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={hanleRed}>
        Load red goods
      </button>

      {activeMode && <GoodsList goods={goods} />}
    </div>
  );
};
