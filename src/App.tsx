import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [messageError, setMessageError] = useState('');

  const loadAllGoods = () => {
    getAll()
      .then(data => setGoods(data))
      .catch(() => setMessageError('Failed to load'));
  };

  const loadFirst = () => {
    get5First()
      .then(data => setGoods(data))
      .catch(() => setMessageError('Failde to load first 5'));
  };

  const loadRed = () => {
    getRedGoods()
      .then(data => setGoods(data))
      .catch(() => setMessageError('Failed to red items'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {messageError && (
        <p className="error" style={{ color: 'red' }}>
          {messageError}
        </p>
      )}

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
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
