import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [good, setGood] = useState<Good[]>([]);

  function getAllButton() {
    getAll().then(data => {
      setGood(data);
    });
  }

  function get5FirstButton() {
    get5First().then(data => {
      setGood(data);
    });
  }

  function getRedButton() {
    getRed().then(data => {
      setGood(data);
    });
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getAllButton}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={get5FirstButton}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getRedButton}>
        Load red goods
      </button>

      <GoodsList goods={good} />
    </div>
  );
};
